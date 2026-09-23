import imgBanner from '../assets/banner-home.webp'
import Banner from "../components/Banner"
import useFetchHousings from '../hooks/useFetchHousings'
import CardList from '../components/CardList'

function Home() {
    const housings = useFetchHousings()

    return (
        <>
            <Banner title={<>Chez vous, <span className="banner__title-end">partout et ailleurs</span></>} image={imgBanner} />
            <CardList housings={housings} />
        </>
    )
}
export default Home
