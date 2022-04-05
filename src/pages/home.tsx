
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../contexts/headerContext';

interface homeProps {
  dataOfAllCreditCards: Array<{
    color: string,
    IsActive: boolean,
    NumberCard: string,
    id: number;
    balance:number
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
    IsActive: boolean,
    NumberCard: string,
    id: number
  }
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <section className='slide'>
        {console.log(ala)}
        {
          dataOfAllCreditCards.map((CredCardData: dataCredCardProps) => {
            return (
              <a
                key={CredCardData.id}
                href={`#${CredCardData.id}`}
                id={`${CredCardData.id}`}
                className={CredCardData.IsActive ? 'slide__item active' : "slide__item"}>
                <CredCardSlide
                  color={`${CredCardData.color}`}
                  IsActive={CredCardData.IsActive}
                  NumberCard={CredCardData.NumberCard}
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
        OccultNumberCard: `${(CredCardData.NumberCard.toString()).substring(0,4)}`,
        IsActive: CredCardData.IsActive,
        balance: CredCardData.balance,
        color: CredCardData.color,
        nameAndLastName: CredCardData.nameAndLastName
      }
    )
  })

  return { props: { dataOfAllCreditCards } }
}


export default home

