import { FormEvent, useState } from "react";

export function FormTransaction() {
    const [transactionAmount, setTransactionAmount] = useState(Number);
    const [transactionDescription, setTransactionDescription] = useState("");


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const saveInfos = {
            amount: transactionAmount,
            description: transactionDescription
        }

        setTransactionAmount(0)
        setTransactionDescription('')
    }
    return (
        <>
            <h4 className="text-gray-500 text-sm mx-6 my-2 pt-6">Transaction details</h4>
            <form method="post" onSubmit={handleCreateNewTransaction} className="flex justify-center flex-wrap gap-y-4 py-6">
                <fieldset className="group w-9/10 max-w-sm px-4 border-2 rounded-large border-gray-500 hover:border-constrast duration-200">
                    <legend className="ml-1 px-2 group-hover:text-constrast duration-200">Amount</legend>
                    <span className="text-gray-400 text-xl">$</span>
                    <input
                        placeholder="$"
                        className="w-9/10% max-w-sm pb-4 pt-2 px-1 border-2  bg-transparent   focus:outline-none "
                        value={transactionAmount}
                        onChange={event => Number.isNaN(Number(event.target.value)) ? "" : setTransactionAmount(Number(event.target.value))}
                    />
                </fieldset>
                <input
                    placeholder="Description (optional)"
                    className="p-5 w-9/10 max-w-sm bg-transparent border-2 rounded-large border-gray-500 focus:outline-none"
                    value={transactionDescription}
                    onChange={event => setTransactionDescription(event.target.value)}
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