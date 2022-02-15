import React from 'react';
import MainSidebar from "./MainSidebar/MainSidebar";

const MainContainer = ({children}) => {
  return (
    <div className='main-container'>
      <MainSidebar/>
      <div className='main'>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;
