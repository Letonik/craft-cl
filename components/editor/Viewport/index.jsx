import { useEditor } from '@craftjs/core';
import cx from 'classnames';
import React, { useEffect } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import lz from 'lzutf8';
import styled from "styled-components";


const EditorBlock = styled.div`
   &::-webkit-scrollbar {
       width: 3px;
       background-color: #5a5a5a;
     }
   &::-webkit-scrollbar-thumb {
      background-color: #ff1919;
      border-radius: 9em;
   }
`;

export const Viewport = ({ children, temp, media}) => {
  const { actions } = useEditor();
  useEffect(() => {
    let load = '';
    if (media === 'desktop') {
      load = temp[0].deskHtml
    }
    if (media === 'tablet') {
      load = temp[0].tabletHtml
    }
    if (media === 'phone') {
      load = temp[0].phoneHtml
    }
    const json = lz.decompress(lz.decodeBase64(load));
 /*   actions.deserialize(json);*/
  }, [media])
  const {
    enabled,
    connectors,
    actions: { setOptions },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        '*'
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="viewport">
      <div
        className={cx(['flex h-full overflow-hidden flex-row w-full fixed'])}
      >
        <div className="page-container flex flex-1 h-full flex-col">
          <Header />
          <EditorBlock
            className={cx([
              'craftjs-renderer flex-1 h-full w-full transition overflow-auto',
              {
                'bg-light-gray-2': enabled,
              },
            ])}
            ref={(ref) => connectors.select(connectors.hover(ref, null), null)}
          >
            <div className="relative flex-col flex items-center py-2 px-5">
              {children}
            </div>
          </EditorBlock>
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
