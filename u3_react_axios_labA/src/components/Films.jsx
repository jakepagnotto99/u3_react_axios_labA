import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Films = () => {
    const [films, setFilms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch("https://swapi.dev/api/films/");
                const data = await response.json();
                setFilms(data.results);
            } catch (error) {
                console.error("Error fetching films:", error);
            }
        };

        fetchFilms();
    }, []);

    const showFilm = (index) => {
        const aFilmUrl = films[index].url;
        const newUrl = new URL(aFilmUrl);
        const pathname = newUrl.pathname;
        const segments = pathname.split("/");
        const filmId = segments[segments.length - 2];
        console.log(filmId);
        navigate(`/films/${filmId}`);
    };

    return (
        <div className="films">
            <h2>List of Films</h2>
            {films.length > 0 ? (
                films.map((film, index) => (
                    <div key={index} onClick={() => showFilm(index)} className="card">
                        <h3>{film.title}</h3>
                    </div>
                ))
            ) : (
                <p>Loading films...</p>
            )}
        </div>
    );
};

export default Films;
