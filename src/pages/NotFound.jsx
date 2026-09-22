import { Link } from "react-router"


function NotFound() {

    return (
        <section className="not-found">
            <h1 className="not-found__title">404</h1>
            <p className="not-found__text">Oups! La page que vous demandez n'existe pas.</p>
            <Link className="not-found__link" to="/">Retourner sur la page d'accueil</Link>
        </section>
    )
}
export default NotFound
