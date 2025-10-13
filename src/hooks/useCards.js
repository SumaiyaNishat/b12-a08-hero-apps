import { useEffect, useState } from "react"
import   axios from "axios"

const useCards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        setLoading(true)
        axios('./allCardData.json').then(data => setCards(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    }, [])

    return {cards, loading, error}

}

export default useCards;