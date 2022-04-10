
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../contexts/headerContext';
import { DataCredCardContext } from '../contexts/slideOfCreditCard';


const Home: NextPage = () => {

  /* Colocar no modifierMainInformation */
  const SaodoBancario = 2293;

  const { modifierDetails } = UseAndModifierInformationsHeader();
  const { modifierHeaderTitle } = UseAndModifierInformationsHeader();
  const { dataOfAllCreditCards,setCreditCardSelected,creditCardSelected } = DataCredCardContext()



  /* ===== header ===== */
  modifierDetails("your banlance")
  modifierHeaderTitle(Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(SaodoBancario))

  const EditValueHeader = 926.21

  function SelectCreditCardToUse(credCardId: number){
    setCreditCardSelected(credCardId)
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
{console.log(creditCardSelected)}
      <section className='slide'>
        {
          dataOfAllCreditCards.map((CredCardData) => {
            return (
              <a
                key={CredCardData.id}
                href={`#${CredCardData.id}`}
                id={`${CredCardData.id}`}
                className={CredCardData.isActive ? 'slide__item active' : "slide__item"}
                onClick={()=>{SelectCreditCardToUse(CredCardData.id)}}
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