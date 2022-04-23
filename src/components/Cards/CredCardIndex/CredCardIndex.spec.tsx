import { render, screen } from '@testing-library/react'
import { CredCardIndex } from './CredCardIndex'

describe('Component CredCardIndex', () => {
    it('renders correctly', () => {
        render(
            <CredCardIndex balance={9999} cardNumber='1234' />
        )


        expect(screen.getByText('1234')).toBeInTheDocument();
        expect(screen.getByText('R$ 9.999,00')).toBeInTheDocument();

    })
})