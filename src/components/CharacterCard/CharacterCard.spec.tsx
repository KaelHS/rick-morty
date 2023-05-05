import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import { CharacterCard } from '.'

const mockedUsedNavigate = jest.fn();

jest.mock('next/navigation', () => ({
   ...jest.requireActual('next/navigation') as any,
  useRouter: () => mockedUsedNavigate,
}));

describe('<CharacterCard />', () => {
    fit('should render CharacterCard by default', () => {
        const mock = {
            id: '1',
            name: 'Teste',
            status: 'Alive',
            image: '' ,
            location: {
                name: 'Local teste'
            }
        }
        const { container } = render(<CharacterCard data={mock}/>)
        expect(container.firstChild).toBeInTheDocument()
    })
    it('shound navigate to character page details when user click in the button link', () => {
        const mock = {
            id: '1',
            name: 'Teste',
            status: 'Alive',
            image: '' ,
            location: {
                name: 'Local teste'
            }
        }
        render(<CharacterCard data={mock}/>)
        const button = screen.getByRole('link')
        fireEvent.click(button)

        expect(mockedUsedNavigate).toBeCalled()
    })
})