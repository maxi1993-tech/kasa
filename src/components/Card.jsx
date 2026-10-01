import { Link } from 'react-router';

/**
 * Carte d'un logement : affiche son titre et sa photo, et mène à la page logement au clic.
 * @param {Object} props
 * @param {string} props.id - sert à construire l'adresse du lien
 * @param {string} props.title - titre du logement
 * @param {string} props.cover - adresse de la photo de couverture
 * @returns {JSX.Element}
 */
function Card({ id, title, cover }) {

    return (
        <li className="card">
            <Link className="card__link" to={`/logement/${id}`}>
                <article>
                    <h2 className="card__title">{title}</h2>
                    <img className="card__cover" src={cover} alt="" />
                </article>
            </Link>
        </li>
    )
}

export default Card
