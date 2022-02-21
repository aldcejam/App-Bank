import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'

const Home: NextPage = () => {

  const EditValueHeader = 926.21
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header
        details={'your balance'}
        mainInformation={Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(EditValueHeader)}
      />

    </>
  )
}

export default Home
