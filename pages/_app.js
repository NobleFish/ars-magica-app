import '../styles/globals.css';
import { AppLayout } from '../components/layout/Layout';

function ArsMagicaApp({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
export default ArsMagicaApp;
