import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

function MyApp({ Component, pageProps }) {
  return (
    // Todo: Wrap the entire app in a ThemeProvider component and CSSBaseline component from Material-UI.
    //<ThemeProvider theme={theme}>
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    //</ThemeProvider>
  );
}

export default MyApp;
