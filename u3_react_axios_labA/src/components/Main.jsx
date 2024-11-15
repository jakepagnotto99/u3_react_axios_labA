import axios from 'axios'
import StarShips from './StarshipList'
import StarshipPage from './StarshipPage'
import Films from './Films'
import FilmPage from './FilmPage'
import Characters from './Characters'
import CharacterPage from './CharacterPage'
import Planets from './Planets'
import PlanetPage from './PlanetPage'
import Home from './Home'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Main = () => {
    const [films, setFilms] = useState([])
    const [planets, setPlanets] = useState([])
    const [characters, setCharacters] = useState([])

  
    useEffect(() => {
      const getFilms = async () => {
        const response = await axios.get(`https://swapi.dev/api/films`)
        setFilms(response.data.results)
      }
    
      getFilms()
    }, [])
  
    useEffect(() => {
      const getCharacters = async () => {
        const response = await axios.get(`https://swapi.dev/api/people`)
        setCharacters(response.data.results)
      }
    
      getCharacters()
    }, [])
  
return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/starships" element={<StarShips />} />
        <Route path="/starships/:starshipId" element={<StarshipPage />} />
        <Route path="/films" element={<Films films={films} />} />
        <Route path="/films/:filmId" element={<FilmPage />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planets/:planetId" element={<PlanetPage />} />
        <Route path="/characters" element={<Characters characters={characters} />} />
        <Route path="/characters/:characterId" element={<CharacterPage />} />
        <Route path="*" element={<h2>404 Error: Whoops, nothing here!</h2>} />
      </Routes> 
  </>
  )
}

export default Main