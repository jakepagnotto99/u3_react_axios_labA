import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const CharacterPage = () => {
    const { characterId } = useParams()
    const [characteData, setCharacterData] = useState()

    useEffect(()=>{
        const getFilm = async() => {
            const response = await axios.get(`https://swapi.dev/api/people/${characterId}`)
            setCharacterData(response.data)
        }
        getFilm()
        }, [])
    if (!characteData) {
        return (<h1> Loading Please Wait </h1>)
    } else {
            return (
                <>
                        <h2>{characteData.name}</h2>
                        <h4>Gender: {characteData.gender}</h4>
                        <h4>Height: {characteData.height}</h4>
                        <h4>Hair Color: {characteData.hair_color}</h4>
                        <h4>Skin Color: {characteData.skin_color}</h4>
                        <h4>Eye Color: {characteData.eye_color}</h4>
                        <Link to='/characters'>Back to all Characters</Link>
                </>
        )
    }
}

export default CharacterPage