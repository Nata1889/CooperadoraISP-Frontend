import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HomeComponent from '@/components/Home'

describe( "Home Component", () => {
    it("Deberia mostrar el componente", () => {

        render(<HomeComponent/>);

        const h1 = screen.getByAltText("Home Component");

        expect(h1).toBeInTheDocuemnt();
    })
} )