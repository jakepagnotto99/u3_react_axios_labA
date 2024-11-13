import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCharacters = async () => {
            let allCharacters = [];
            let url = "https://swapi.dev/api/people/";

            while (url) {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    allCharacters = [...allCharacters, ...data.results];
                    url = data.next; // SWAPI provides the next page URL
                } catch (error) {
                    console.error("Error fetching characters:", error);
                    break;
                }
            }

            setCharacters(allCharacters);
        };

        fetchCharacters();
    }, []);

    const showCharacter = (url) => {
        const characterId = url.split("/").filter(Boolean).pop();
        navigate(`/characters/${characterId}`);
    };

    return (
        <div className="characters">
            <h2>List of Characters</h2>
            {characters.length > 0 ? (
                characters.map((character) => (
                    <div
                        key={character.url}
                        onClick={() => showCharacter(character.url)}
                        className="card"
                    >
                        <h3>{character.name}</h3>
                    </div>
                ))
            ) : (
                <p>Loading characters...</p>
            )}
        </div>
    );
};

export default Characters;
