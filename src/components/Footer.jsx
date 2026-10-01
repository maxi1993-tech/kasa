import logoFooter from '../assets/logo-footer.svg'

/**
 * Pied de page : affiche le logo et le copyright.
 * @returns {JSX.Element}
 */
function Footer() {

    return (
        <footer className="footer">
            <img className="footer__logo" src={logoFooter} alt="" />
            <p className="footer__text">&copy; 2020 Kasa. All{" "}
                <br className="footer__line-break" />
                rights reserved
            </p>
        </footer>
    )
}

export default Footer
