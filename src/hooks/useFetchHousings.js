import { useState, useEffect } from 'react'

function useFetchHousings() {
    const [housings, setHousings] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}data/properties.json`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Status ${response.status}`)
                }
                return response.json()
            })
            .then((data) => {
                setHousings(data)
            })
            .catch((error) => {
                console.error('Logements indisponibles :', error.message)
            })
    }, [])
    return housings
}

export default useFetchHousings
