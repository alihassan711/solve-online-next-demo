import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import '../styles/page.css';
import '../styles/pageInternal.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
