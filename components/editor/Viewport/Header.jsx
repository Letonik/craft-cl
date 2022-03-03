import {useEditor} from '@craftjs/core';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SaveIcon from '@mui/icons-material/Save';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import cx from 'classnames';
import React, {useState} from 'react';
import styled from 'styled-components';
import lz from 'lzutf8';
import Checkmark from '../../../public/icons/check.svg';
import Customize from '../../../public/icons/customize.svg';
import RedoSvg from '../../../public/icons/toolbox/redo.svg';
import UndoSvg from '../../../public/icons/toolbox/undo.svg';
import {useDispatch, useSelector} from "react-redux";
import {getMediaSelector} from "../../../store/selectors/selectors";
import {changeMedia} from "../../../store/reducers/mediaReducer";
import {useRouter} from "next/router";
import {tempsAPI} from "../../../api/api";
import {OneAndFourGrid} from "../../selectors/Templates/OneAndFourGrid";
import {ThreeColumnsGrid} from "../../selectors/Templates/ThreeColumnsGrid";
import {TwoColumnsGrid} from "../../selectors/Templates/TwoColumnsGrid";
import {FourColumnsGrid} from "../../selectors/Templates/FourColumnsGrid";
import {CustomGrid} from "../../selectors/Templates/CustomGrid";
import {TwoColumnsBottom} from "../../selectors/Templates/TwoColumnsBottom";
import {ThreeColumnsBottom} from "../../selectors/Templates/ThreeColumnsBottom";
import {FourColumnsBottom} from "../../selectors/Templates/FourColumnsBottom";
import {TwoColumnsText} from "../../selectors/Templates/TwoColumnsText";
import {ThreeColumnsText} from "../../selectors/Templates/ThreeColumnsText";
import Tooltip from "@mui/material/Tooltip";
import {ImageWidhtAnimateText} from "../../selectors/Image/ImageWidhtAnimateText";
import {ColumnsGrid2x1} from "../../selectors/Templates/ColumnsGrid2x1";
import {ColumnsGrid1x1x1} from "../../selectors/Templates/ColumnsGrid1x1x1";
import {ColumnsGrid1x1x1x1} from "../../selectors/Templates/ColumnsGrid1x1x1x1";

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
  height: 230px;
   width: 100%;
  padding: 20px 20px;
  overflow-x: auto;
  &>div {
     margin: auto;
     width: 100%;
     max-width: 1200px;
     overflow: hidden;
     overflow-x: auto;
     border: 2px solid white;
     border-radius: 5px;
     height: 100%;
     display: flex;
     justify-content: center;
     align-items: center;
     &>div {
       margin: 0 10px;
     }
     &::-webkit-scrollbar {
       height: 6px;
       background-color: #5a5a5a;
     }
     &::-webkit-scrollbar-thumb {
        background-color: #ff1919;
        border-radius: 9em;
     }
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
    console.log(query.getState())
/*    const json = query.serialize();
    const html = lz.encodeBase64(lz.compress(json));
    await tempsAPI.saveCode(code, id, html, media)*/
  }
  const offset = [0,0,0,0,0,0,0]

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

             {/*                 Delete                    */}
            {offset.map((i, key) =>
              <div key={key}>
                <div style={{width: '150px'}}>
                  <img src="/onetofor.png" alt="" style={{width: '150px'}}/>
                </div>
              </div>
            )}
           {/*                  ////////////               */}
            <div
              ref={(ref) =>
                create(ref, <ColumnsGrid2x1/>)
              }
            >
              <Tooltip title="1K2" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/1k2.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <ColumnsGrid1x1x1/>)
              }
            >
              <Tooltip title="1x1x1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/1x1x1.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <ColumnsGrid1x1x1x1/>)
              }
            >
              <Tooltip title="1x1x1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/1x1x1x1.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <OneAndFourGrid/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/onetofor.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <TwoColumnsGrid/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/2col.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <ThreeColumnsGrid/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/3col.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <FourColumnsGrid/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/4col.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <CustomGrid/>)
              }
            >
              <Tooltip title="4in1" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/5cus.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <TwoColumnsBottom/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/2colText.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <ThreeColumnsBottom/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/3colText.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <FourColumnsBottom/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/4colText.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <TwoColumnsText/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/2colBlock.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
            <div
              ref={(ref) =>
                create(ref, <ThreeColumnsText/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/3colBlock.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>

            <div
              ref={(ref) =>
                create(ref, <ThreeColumnsText/>)
              }
            >
              <Tooltip title="2col" placement="right">
                <div className="cursor-pointer block" move style={{width: '150px'}}>
                  <img src="/4colBlock.png" alt="" style={{width: '150px'}}/>
                </div>
              </Tooltip>
            </div>
          </div>
        </Templates>
      }
    </HeaderDiv>
  );
};
