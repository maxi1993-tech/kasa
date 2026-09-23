import Card from './Card'

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
