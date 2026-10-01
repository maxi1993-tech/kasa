import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

/**
 * Gabarit commun des pages : regroupe le header et le footer et affiche la page dont l'URL correspond.
 * @returns {JSX.Element}
 */
function Layout() {

    return (
        <div className="layout">
            <Header />
            <main className="layout__main">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
