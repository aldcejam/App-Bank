import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-md bg-primary h-screen mx-auto overflow-scroll overflow-x-hidden beautiful-scrool pt-24">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
