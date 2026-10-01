import Card from './Card'

/**
 * Liste des logements : affiche une card par logement.
 * @param {Object} props
 * @param {Object[]} props.housings - tableau qui contient tous les logements
 * @returns {JSX.Element}
 */
function CardList({ housings }) {

    return (
        <ul className="card-list">
            {housings.map((housing) => (
                <Card key={housing.id} id={housing.id} title={housing.title} cover={housing.cover} />
            ))}
        </ul>
    )
}

export default CardList
