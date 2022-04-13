
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../contexts/headerContext';
import { DataCredCardContext } from '../contexts/slideOfCreditCard';


const Home: NextPage = () => {

  
  const { dataOfAllCreditCards, setCreditCardSelected, creditCardSelected } = DataCredCardContext()
  /* Colocar no modifierMainInformation */
  const CredCardBalance = 2293;
  
  
  
  /* ===== header ===== */
  const { modifierDetails } = UseAndModifierInformationsHeader();
  const { modifierHeaderTitle } = UseAndModifierInformationsHeader();

  modifierDetails("your banlance")
  modifierHeaderTitle(Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(CredCardBalance))

  function SelectCreditCardToUse(credCardId: number) {
    setCreditCardSelected(credCardId)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className='slide'>
        {
          dataOfAllCreditCards.map((CredCardData) => {
            return (
              <a
                key={CredCardData.id}
                href={`#${CredCardData.id}`}
                id={`${CredCardData.id}`}
                className={CredCardData.id == creditCardSelected ? 'slide__item active' : "slide__item"}
                onClick={() => { SelectCreditCardToUse(CredCardData.id) }}
              >
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

export default Home