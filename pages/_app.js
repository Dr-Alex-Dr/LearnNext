import '../styles/globals.scss';
import '../components/Layout';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
