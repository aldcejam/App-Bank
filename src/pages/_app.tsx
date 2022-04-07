import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { InformationsHeaderProvider } from "../contexts/headerContext"
import { creditCardDatabaseProvider } from '../contexts/slideOfCreditCard'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider
      session={pageProps.session}
    >
        <InformationsHeaderProvider>
          <div className="relative w-full max-w-md h-screen bg-secondary mx-auto pt-24 pb-28 overflow-y-auto overflow-x-hidden beautiful-scrool">
            <Header />
            <Footer />
            <Component {...pageProps} />
          </div>
        </InformationsHeaderProvider>
    </SessionProvider>
  )
}


export default MyApp
