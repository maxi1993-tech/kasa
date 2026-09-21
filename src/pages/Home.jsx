import imgBanner from '../assets/banner-home.webp'
import Banner from "../components/Banner"
import { useState, useEffect } from 'react'
import CardList from '../components/CardList'

function Home() {
    const [housings, setHousings] = useState([])

    useEffect(() => {
        fetch('/data/properties.json')
            .then((response) => response.json())
            .then((data) => {
                setHousings(data)
            })
    }, [])

    return (
        <>
            <Banner title={<>Chez vous, <span className="banner__title-end">partout et ailleurs</span></>} image={imgBanner} />
            <CardList housings={housings} />
        </>
    )
}
export default Home
