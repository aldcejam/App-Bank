import { render, screen } from '@testing-library/react'
import { SettingCard } from './SettingCard'

describe('CardSetting',()=>{
    it('renders correctly', ()=>{
        render(
            <SettingCard icon={'fakeIcon'} settingName='FakeSettingName'/>
        )

        expect(screen.getByText('FakeSettingName')).toBeInTheDocument
    })
})