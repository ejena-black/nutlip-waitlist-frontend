import 'waitlist/styles/globals.css'
import Layout from '../components/layout'
import { Analytics } from '@vercel/analytics'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
         <Component {...pageProps} />
         <Analytics />
    </Layout>
  )
}
