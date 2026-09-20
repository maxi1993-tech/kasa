import imgBanner from '../assets/banner-home.webp'
import Banner from "../components/Banner"

function Home() {

    return (
        <>
            <Banner title={<>Chez vous, <span className="banner__title-end">partout et ailleurs</span></>} image={imgBanner} />
        </>
    )
}
export default Home
