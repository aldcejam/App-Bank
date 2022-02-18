import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header details={'alsl'} text={'926.21'}/>
      
    </>
  )
}

export default Home
