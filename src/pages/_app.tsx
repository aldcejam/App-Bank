import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { InformationsProvider } from "../contexts/headerContext"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <InformationsProvider>
      <div className="w-full max-w-md bg-primary h-screen mx-auto overflow-auto overflow-x-hidden beautiful-scrool pt-24 pb-20">
        <Header />
        <Footer />
        <Component {...pageProps} />
      </div>
    </InformationsProvider>
  )
}

export default MyApp
