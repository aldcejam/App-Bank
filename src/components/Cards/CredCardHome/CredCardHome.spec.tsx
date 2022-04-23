import { render, screen } from '@testing-library/react'
import { CredCardHome } from './CredCardHome'

describe("Component CredCardHome",()=>{
    it('renders correctly',()=>{
        render(
            <CredCardHome color='blue' nameAndLastName='John Doe' expires='06/2025' numberCard='1234'/>
        )

        expect(screen.getByText('**** **** **** 1234')).toBeInTheDocument
        expect(screen.getByText('John Doe')).toBeInTheDocument
        expect(screen.getByText('06/2025')).toBeInTheDocument

    })
})