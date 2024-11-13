import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Planets = () => {

    const [planets, setPlanets] = useState([])

    useEffect(()=>{
        const getPlanets = async() => {
        const response = await axios.get(`https://swapi.dev/api/planets/`)
        setPlanets(response.data.results)
    }
    getPlanets()
    }, [])

    let navigate = useNavigate()

    const showPlanet = (key) => {
        const aPlanetUrl = planets[key].url
        const newUrl = new URL (aPlanetUrl)
        const pathname = newUrl.pathname
        const segments = pathname.split('/')
        const planetId = segments[segments.length - 2]
        console.log(planetId)
        navigate(`${planetId}`)
    }

    return(
    <div className="planets">
        <h2>List of Planets</h2>
        {
        planets.map((p, key) => (
            <div key={key} onClick={()=>showPlanet(key)} className="card">
                <h3>{p.name}</h3>
            </div>
        ))
        }
    </div>
    )
}

  export default Planets