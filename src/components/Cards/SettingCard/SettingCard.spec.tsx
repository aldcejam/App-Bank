import { render, screen } from '@testing-library/react'
import { SettingCard } from './SettingCard'

describe('Component CardSetting',()=>{
    it('renders correctly', ()=>{
        render(
            <SettingCard icon={'fakeIcon'} settingName='FakeSettingName'/>
        )

        expect(screen.getByText('FakeSettingName')).toBeInTheDocument
    })
})