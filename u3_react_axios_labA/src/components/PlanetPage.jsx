import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const PlanetPage = () => {
    const { planetId } = useParams()
    console.log(planetId)
    const [planetData, setPlanetData] = useState()

    useEffect(()=>{
        const getStarship = async() => {
            console.log('this function is called')
            const response = await axios.get(`https://swapi.dev/api/planets/${planetId}`)
            console.log(response)
            setPlanetData(response.data)
        }
        getStarship()
        }, [])
    if (!planetData) {
        return (<h1> Loading Please Wait </h1>)
    } else {
            return (
                <>
                    <h2>{planetData.name}</h2>
                    <h4>Terrain: {planetData.terrain}</h4>
                    <h4>Population: {planetData.population}</h4>
                    <h4>Climate: {planetData.climate}</h4>
                    <Link to='/planets'>Back to all Planets</Link>
                </>
        )
    }
}

export default PlanetPage