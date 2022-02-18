import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full max-w-md bg-primary h-screen mx-auto">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
