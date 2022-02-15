import React from 'react';
import { wrapper } from '../store/store';

import '../styles/app.css';
import '../styles/MainSidebar.css';

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)