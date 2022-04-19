
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { CredCardSlide } from '../components/cards';
import { UseAndModifierInformationsHeader } from '../Contexts/headerContext';
import { DataCredCardContext } from '../Contexts/slideOfCreditCard';


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
      <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Transaction details</h4>
            <form method="post"  className="flex justify-center flex-wrap gap-y-4 py-6">
                <fieldset className="group w-9/10 max-w-sm px-4 border-2 rounded-large border-gray-500 hover:border-constrast duration-200">
                    <legend className="ml-1 px-2 group-hover:text-constrast duration-200">Amount</legend>
                    <span className="text-gray-400 text-xl">$</span>
                    <input
                        placeholder="$"
                        className="w-9/10% max-w-sm pb-4 pt-2 px-1 border-2  bg-transparent   focus:outline-none "/>
                </fieldset>
                <input
                    placeholder="Description (optional)"
                    className="p-5 w-9/10 max-w-sm bg-transparent border-2 rounded-large border-gray-500 focus:outline-none"
                />
                <br />
                <button
                    type="submit"
                    className="w-9/10 max-w-sm bg-constrast py-4 rounded-large text-secondary">
                    Confirm
                </button>

            </form>
       
    </>
  )
}

export default Home