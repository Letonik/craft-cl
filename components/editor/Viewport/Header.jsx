import {useEditor, useNode} from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import cx from 'classnames';
import React, {useState} from 'react';
import styled from 'styled-components';
import lz from 'lzutf8';
import Checkmark from '../../../public/icons/check.svg';
import Customize from '../../../public/icons/customize.svg';
import RedoSvg from '../../../public/icons/toolbox/redo.svg';
import UndoSvg from '../../../public/icons/toolbox/undo.svg';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import TabletMacIcon from '@material-ui/icons/TabletMac';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import SaveIcon from '@material-ui/icons/Save';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import {useDispatch, useSelector} from "react-redux";
import {getMediaSelector} from "../../../store/selectors/selectors";
import {changeMedia} from "../../../store/reducers/mediaReducer";
import {useRouter} from "next/router";
import {tempsAPI} from "../../../api/api";
import {Text} from "../../selectors/Text";
import TypeSvg from "../../../public/icons/toolbox/text.svg";
import {OneAndFour} from "../../selectors/Templates/OneAndFour";

const HeaderDiv = styled.div`
  width: 100%;
  height: auto;
  z-index: 9998;
  position: relative;
  padding: 0px 10px;
  background: #2c2d31;
  .head {
    height: 45px;
  }
`;

const Templates = styled.div`
  width: 100%;
  height: 230px;
  padding: 20px 20px;
  &>div {
     border: 2px solid white;
     border-radius: 5px;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
  }
  
/*  background: #2c2d31;*/
`;

const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
  margin-left: 10px;
  color: #fff;
  font-size: 13px;
  svg {
    margin-right: 6px;
    width: 12px;
    height: 12px;
    fill: #fff;
    opacity: 0.9;
  }
`;
const Item = styled.a`
  margin-right: 10px;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: #13c2c2;
  }
  ${(props) =>
    props.disabled &&
    `
    opacity:0.5;
    cursor: not-allowed;
  `}
`;
const Media = styled.a`
  margin-left: 30px;
  display: flex;
  div {
    margin-right: 10px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      fill: #13c2c2;
      opacity:0.5;
    } 
  }
  .active {
    svg {
      opacity:1;
    } 
  }
`;

export const Header = () => {
  const { query, enabled, canUndo, canRedo, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    canUndo: query.history.canUndo(),
    canRedo: query.history.canRedo(),
  }));
  const {
    connectors: {create},
  } = useEditor(() => ({}));
  const router = useRouter()
  const {id, code} = router.query
  const dispatch = useDispatch()
  const media = useSelector(state => getMediaSelector(state));
  const setMedia = (device) => {
    dispatch(changeMedia(device));
  }
  const [templates, setTemplates] = useState(false)
  const closeOpenTemplates = () => {
    templates ? setTemplates( false) : setTemplates( true)
  }
  const saveCode = async () => {
    const json = query.serialize();
    const html = lz.encodeBase64(lz.compress(json));
    await tempsAPI.saveCode(code, id, html, media)
  }

  return (
    <HeaderDiv className="header text-white transition w-full">
      <div className="items-center flex w-full px-4 justify-end head">
        {enabled && (
          <div className="flex-1 flex">
            <Tooltip title="Undo" placement="bottom">
              <Item disabled={!canUndo} onClick={() => actions.history.undo()}>
                <UndoSvg />
              </Item>
            </Tooltip>
            <Tooltip title="Redo" placement="bottom">
              <Item disabled={!canRedo} onClick={() => actions.history.redo()}>
                <RedoSvg />
              </Item>
            </Tooltip>
            <Media>
              <div
                className={media == 'desktop' && 'active'}
                onClick={() => setMedia('desktop')}
              >
                <DesktopMacIcon />
              </div>
              <div
                className={media == 'tablet' && 'active'}
                onClick={() => setMedia('tablet')}
              >
                <TabletMacIcon />
              </div>
              <div
                className={media == 'phone' && 'active'}
                onClick={() => setMedia('phone')}
              >
                <PhoneIphoneIcon />
              </div>
            </Media>
          </div>
        )}
        <div className="flex">
          {enabled &&
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-orange': enabled,
              },
            ])}
            onClick={closeOpenTemplates}
          >
            <ArrowDropDownCircleIcon /> Шаблоны
          </Btn>
          }
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-info': enabled,
                'bg-peach': !enabled,
              },
            ])}
            onClick={() => {
              actions.setOptions((options) => (options.enabled = !enabled));
            }}
          >
            {enabled ? <Checkmark /> : <Customize />}
            {enabled ? 'Посмотреть' : 'Редактировать'}
          </Btn>
          {enabled &&
          <Btn
            className={cx([
              'transition cursor-pointer',
              {
                'bg-red': enabled,
              },
            ])}
            onClick={saveCode}
          >
            <SaveIcon /> Сохранить
          </Btn>
          }
        </div>
      </div>
      {templates &&
        <Templates>
          <div>
            <div
              ref={(ref) =>
                create(ref, <OneAndFour/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move>
                  <img src="/onetofor.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
          </div>
        </Templates>
      }
    </HeaderDiv>
  );
};
