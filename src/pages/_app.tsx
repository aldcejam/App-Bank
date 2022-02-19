import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-md bg-primary h-screen mx-auto overflow-auto overflow-x-hidden beautiful-scrool pt-24">
      <Footer/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
