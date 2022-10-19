import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MiniDrawer from '../components/MiniDrawer/MiniDrawer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MiniDrawer />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
