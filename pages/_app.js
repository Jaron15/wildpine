import "@/styles/globals.css";
import Layout from './components/Layout';
import { ScrollProvider } from "./components/ScrollContext";


export default function App({ Component, pageProps }) {
  return (
    <ScrollProvider>
    <Layout>
  <Component {...pageProps} />
  </Layout>
  </ScrollProvider> 
)
}
