import { CardForAddCredCard } from "./CardForAddCredCard";
import { render,screen } from '@testing-library/react'


describe('Component CardForAddCredCard', ()=>{
    it('renders correctly',()=>{
        render(
            <CardForAddCredCard/>
        )

        expect(screen.getByText('new cred card')).toBeInTheDocument
    })

})