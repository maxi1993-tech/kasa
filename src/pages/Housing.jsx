import { useParams } from "react-router"
import useFetchHousings from "../hooks/useFetchHousings"
import Slideshow from "../components/Slideshow"
import starActive from "../assets/star-active.svg"
import starInactive from "../assets/star-inactive.svg"
import Collapse from "../components/Collapse"


function Housing() {

    const { id } = useParams()
    const housings = useFetchHousings()

    const housing = housings.find((item) => item.id === id)

    const stars = [1, 2, 3, 4, 5]

    if (!housing) {
        return null
    }

    return (
        <>
            <Slideshow pictures={housing.pictures} />
            <section className="housing">
                <div className="housing__heading">
                    <h1 className="housing__title">{housing.title}</h1>
                    <p className="housing__location">{housing.location}</p>
                    <ul className="housing__tags">
                        {housing.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </div>
                <div className="housing__meta">
                    <div className="housing__ratings">
                        {stars.map((star) => (
                            <img className="housing__star" key={star} src={star <= housing.rating ? starActive : starInactive} alt="" />
                        ))}
                        <span className="sr-only">Note de {housing.rating} sur 5</span>
                    </div>
                    <figure className="housing__host">
                        <figcaption className="housing__hostname">{housing.host.name}</figcaption>
                        <img className="housing__avatar" src={housing.host.picture} alt="" />
                    </figure>
                </div>
                <Collapse title="Description" description={housing.description} />
                <Collapse title="Équipements" description={<ul>
                    {housing.equipments.map((equipment) => (
                        <li key={equipment}>{equipment}</li>
                    ))}
                </ul>} />
            </section>
        </>
    )
}
export default Housing

