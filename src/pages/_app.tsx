import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/footer'
import { CreditCardDatabaseProvider } from '../contexts/CredCardsDataContext'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps }: AppProps) {
  return (

    <SessionProvider
      session={pageProps.session}
    >
      <CreditCardDatabaseProvider>
          <div className="relative w-full max-w-md h-screen bg-secondary mx-auto pt-24 pb-28 overflow-y-auto overflow-x-hidden beautiful-scrool">
            <Footer />
            <Component {...pageProps} />
          </div>
      </CreditCardDatabaseProvider >
    </SessionProvider>
  )
}


export default MyApp
