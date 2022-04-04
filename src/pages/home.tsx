
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';
import { CredCard, CredCardSlide } from '../components/cards';
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

  const credCardDataBase = [
    {
      color: "bg-orange-cp",
      IsActive: true,
      NumberCard: "3283",
    },
    {
      color: "bg-constrast",
      IsActive: false,
      NumberCard: "4543",
    }
  ]
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className='slide'>
        {
          credCardDataBase.map((a)=>{
            return(
              <a href={`#${a.NumberCard}`} id={`${a.NumberCard}`} key={a.NumberCard} className='slide__item'>
                <CredCardSlide  color={`${a.color}`}/>
              </a>
            )
          }

          )
        }
      </section>
    </>
  )
}

export default home

