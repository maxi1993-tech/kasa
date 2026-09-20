import { Link } from "react-router";

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
