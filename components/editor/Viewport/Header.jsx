import { useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
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
import {useDispatch, useSelector} from "react-redux";
import {getMediaSelector} from "../../../store/selectors/selectors";
import {changeMedia} from "../../../store/reducers/mediaReducer";
import {useRouter} from "next/router";
import {tempsAPI} from "../../../api/api";

const HeaderDiv = styled.div`
  width: 100%;
  height: auto;
  z-index: 99999;
  position: relative;
  padding: 0px 10px;
  background: #2c2d31;
  display: flex;
  .head {
    height: 45px;
  }
`;
const Btn = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  border-radius: 3px;
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
  const router = useRouter()
  const {id, code} = router.query
  const dispatch = useDispatch()
  const media = useSelector(state => getMediaSelector(state));
  const setMedia = (device) => {
    dispatch(changeMedia(device));
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
            style={{marginLeft: "10px"}}
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
    </HeaderDiv>
  );
};
