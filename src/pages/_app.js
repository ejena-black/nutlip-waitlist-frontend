import 'waitlist/styles/globals.css'
import Layout from '../components/layout'
import { Analytics } from '@vercel/analytics/react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }) {
  return(
    <Layout>
         <Component {...pageProps} />
         <Analytics />
         <ToastContainer/>

    </Layout>
  )
}
