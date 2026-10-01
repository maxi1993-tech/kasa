import { useState } from 'react';
import arrowUp from '../assets/icon-arrow-up.svg'

/**
 * Bloc repliable : affiche un titre, et le contenu s'ouvre ou se ferme au clic ; fermé par défaut.
 * @param {Object} props
 * @param {string} props.title - titre du collapse
 * @param {React.ReactNode} props.description - contenu affiché à l'ouverture
 * @returns {JSX.Element}
 */
function Collapse({ title, description }) {
    const [open, setOpen] = useState(false)

    return (
        <section className={open ? "collapse collapse--open" : "collapse"}>
            <h2 className="collapse__title">
                <button className="collapse__button" type="button" onClick={() => setOpen((current) => (!current))}>{title}
                    <img className="collapse__arrow" src={arrowUp} alt="" />
                </button>
            </h2>
            <div className="collapse__content">{description}</div>
        </section>
    )
}

export default Collapse

