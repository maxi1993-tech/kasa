import { NavLink } from "react-router"
import logoHeader from '../assets/logo-header.svg'

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logoHeader} alt="Kasa" />
            <nav className="header__nav">
                <ul className="header__list">
                    <li>
                        <NavLink className="header__link" to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink className="header__link" to="/a-propos">A propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header
