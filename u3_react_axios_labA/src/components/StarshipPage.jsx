import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const StarshipPage = () => {
    const { starshipId } = useParams()
    const [starshipData, setStarshipData] = useState()
    console.log(starshipId)

    useEffect(()=>{
        const getStarship = async() => {
            console.log('this function is called')
            const response = await axios.get(`${BASE_URL}/api/starships/${starshipId}`)
            console.log(response)
            setStarshipData(response.data)
        }
        getStarship()
        }, [])
    if (!starshipData) {
        return (<h1> Loading Please Wait </h1>)
    } else {
            return (
                <>
                    <h2>{starshipData.name}</h2>
                    <h4>Model: {starshipData.model}</h4>
                    <h4>Manufacturer: {starshipData.manufacturer}</h4>
                    <h4>Price: {starshipData.cost_in_credits}</h4>
                    <h4>Crew: {starshipData.crew}</h4>
                    <h4>Passengers: {starshipData.passengers}</h4>
                    <h4>Starship Class: {starshipData.starship_class}</h4>
                    <Link to='/starships'>Back to all Ships</Link>
                </>
        )
    }
}

export default StarshipPage