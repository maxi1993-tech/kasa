import { useParams } from "react-router"
import useFetchHousings from '../hooks/useFetchHousings'

function Housing() {

    const { id } = useParams()
    const housings = useFetchHousings()

    const housing = housings.find((item) => item.id === id)
    console.log(housings)

    if (!housing) {
        return null
    }

    return (
        <h1>{housing.title}</h1>
    )
}
export default Housing
