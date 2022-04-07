
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../contexts/headerContext';

interface homeProps {
  dataOfAllCreditCards: Array<{
    id: number;
    color: string,
    isActive: boolean,
    occultNumberCard: string,
    nameAndLastName:string,
    expires: string
  }>
  ala: any
}

const home = ({ dataOfAllCreditCards,ala }: homeProps) => {

  /* Colocar no modifierMainInformation */
  const SaodoBancario = 2293;

  const { modifierDetails } = UseAndModifierInformationsHeader();
  const { modifierHeaderTitle } = UseAndModifierInformationsHeader();



  /* ===== header ===== */
  modifierDetails("your banlance")
  modifierHeaderTitle(Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(SaodoBancario))

  const EditValueHeader = 926.21

  interface dataCredCardProps {
    color: string,
    isActive: boolean,
    occultNumberCard: string,
    id: number,
    nameAndLastName: string,
    expires: string
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className='slide'>
        {
          dataOfAllCreditCards.map((CredCardData: dataCredCardProps) => {
            return (
              <a
                key={CredCardData.id}
                href={`#${CredCardData.id}`}
                id={`${CredCardData.id}`}
                className={CredCardData.isActive ? 'slide__item active' : "slide__item"}>
                <CredCardSlide
                  color={`${CredCardData.color}`}
                  numberCard={CredCardData.occultNumberCard}
                  nameAndLastName={CredCardData.nameAndLastName}
                  expires={CredCardData.expires}
                />
              </a>
            )
          }
          )
        }
      </section>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`http://localhost:3333/Credcarddata`)
  const creditCardsDataBase = await res.json()

  const dataOfAllCreditCards = creditCardsDataBase.map((CredCardData: any) => {
    return (
      {
        id: CredCardData.id,
        occultNumberCard: `${(CredCardData.numberCard.toString()).substring(0,4)}`,
        isActive: CredCardData.isActive,
        balance: CredCardData.balance,
        color: CredCardData.color,
        nameAndLastName: CredCardData.nameAndLastName,
        expires: CredCardData.expires
      }
    )
  })

  return { props: { dataOfAllCreditCards } }
}


export default home

