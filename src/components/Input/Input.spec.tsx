import { render, screen } from '@testing-library/react'
import { Input } from '.'

describe('<Input />', () => {
    it('should render input without label', () => {
        const mock = {
            label: ''
        }
        render(<Input {...mock } />)
        expect(screen.queryByTestId('')).toBeNull()

    })
    it('should render input with label', () => {
        const mock = {
            label: 'Teste'
        }
        render(<Input {...mock } />)
        expect(screen.getByTestId('label')).toBeInTheDocument()

    })
})
