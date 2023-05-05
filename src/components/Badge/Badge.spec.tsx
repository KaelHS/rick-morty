import { render, screen } from '@testing-library/react'
import { Badge } from '.'

describe('<Badge />', () => {
    it('shound render alive badge', () => {
        const mock = {
            value: 'Alive'
          }

        render(<Badge {...mock} />)
        expect(screen.getByText('ALIVE')).toBeInTheDocument()
    })

    it('shound render death badge', () => {
        const mock = {
            value: 'Dead'
          }

        render(<Badge {...mock} />)
        expect(screen.getByText('DEAD')).toBeInTheDocument()
    })

    it('shound render alive badge', () => {
        const mock = {
            value: 'unknown'
          }

        render(<Badge {...mock} />)
        expect(screen.getByText('UNKNOWN')).toBeInTheDocument()
    })
})