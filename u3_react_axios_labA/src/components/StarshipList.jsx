import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const StarShips = () => {

    const [starships, setStarships] = useState([])

    useEffect(()=>{
        const getStarships = async() => {
        const response = await axios.get(`https://swapi.dev/api/starships/`)
        setStarships(response.data.results)
    }
    getStarships()
    }, [])

    let navigate = useNavigate()

    const showShip = (key) => {
        const aShipUrl = starships[key].url
        const newUrl = new URL (aShipUrl)
        console.log(newUrl)
        const pathname = newUrl.pathname
        const segments = pathname.split('/')
        console.log(segments)
        const shipId = segments[segments.length - 2]
        console.log(shipId)
        navigate(`${shipId}`)
    }

    return(
    <div className="starship">
        <h2>List of Starships</h2>
        {
        starships.map((starship, key) => (
            <div key={key} onClick={()=>showShip(key)} className="card">
                <h3>{starship.name}</h3>
            </div>
        ))
        }
    </div>
    )
}

  export default StarShips