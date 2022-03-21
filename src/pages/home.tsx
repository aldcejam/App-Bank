
import type { NextPage } from 'next'
import Head from 'next/head'
import { UseAndModifierInformations } from '../contexts/headerContext';

const home: NextPage = () => {

  /* Colocar no modifierMainInformation */
  const SaodoBancario = 2293;

  const { modifierDetails } = UseAndModifierInformations();
  const { modifierHeaderTitle } = UseAndModifierInformations();

  /* ===== header ===== */
  modifierDetails("your banlance")
  modifierHeaderTitle(Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(SaodoBancario))

  const EditValueHeader = 926.21
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      aaa
    </>
  )
}

export default home