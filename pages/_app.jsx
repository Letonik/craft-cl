import React from 'react';
import { wrapper } from '../store/store';
import { RestfulProvider } from "restful-react";
import '../styles/app.css';
import '../styles/MainSidebar.css';
/*import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";*/

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
const WithProvider =  ({...props}) =>
  <RestfulProvider base="http://localhost:5000/api">
    <MyApp {...props}/>
  </RestfulProvider>;

export default wrapper.withRedux(WithProvider)




