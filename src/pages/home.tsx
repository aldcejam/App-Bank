
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../contexts/headerContext';

interface homeProps {
  dataOfAllCreditCards: Array<{
    id: number;
    color: string,
    IsActive: boolean,
    OccultNumberCard: string,
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
    OccultNumberCard: string,
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
                  NumberCard={CredCardData.OccultNumberCard}
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
        Id: CredCardData.id,
        OccultNumberCard: `${(CredCardData.NumberCard.toString()).substring(0,4)}`,
        IsActive: CredCardData.IsActive,
        Balance: CredCardData.balance,
        Color: CredCardData.color,
        NameAndLastName: CredCardData.nameAndLastName,
        Expires: CredCardData.Expires
      }
    )
  })

  return { props: { dataOfAllCreditCards } }
}


export default home

