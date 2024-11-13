import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Link } from "react-router-dom"

const FilmPage = () => {
    const { filmId } = useParams()
    const [filmData, setFilmData] = useState()

    useEffect(()=>{
        const getFilm = async() => {
            const response = await axios.get(`${BASE_URL}/api/films/${filmId}`)
            setFilmData(response.data)
        }
        getFilm()
        }, [])
    if (!filmData) {
        return (<h1> Loading Please Wait </h1>)
    } else {
            return (
                <>
                        <h2>{filmData.title}</h2>
                        <h4>Episode: {filmData.episode_id}</h4>
                        <h4>Opening Crawl: {filmData.opening_crawl}</h4>
                        <h4>Producers: {filmData.producer}</h4>
                        <h4>Release Date: {filmData.release_date}</h4>
                        <Link to='/films'>Back to all Films</Link>
                </>
        )
    }
}

export default FilmPage