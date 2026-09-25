import { useState, useEffect } from 'react'

function useFetchHousings() {
    const [housings, setHousings] = useState([])
    const [isLoading, setIsLoading] = useState(true)

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
                setIsLoading(false)
            })
            .catch((error) => {
                setIsLoading(false)
                console.error('Logements indisponibles :', error.message)
            })
    }, [])
    return { housings, isLoading }
}

export default useFetchHousings
