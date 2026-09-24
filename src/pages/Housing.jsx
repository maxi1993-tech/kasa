import { useParams } from "react-router"
import useFetchHousings from '../hooks/useFetchHousings'
import Slideshow from '../components/Slideshow'


function Housing() {

    const { id } = useParams()
    const housings = useFetchHousings()

    const housing = housings.find((item) => item.id === id)

    if (!housing) {
        return null
    }

    return (
        <>
            <Slideshow pictures={housing.pictures} />
            <h1>{housing.title}</h1>
        </>
    )
}
export default Housing
