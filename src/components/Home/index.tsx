import { Container } from "./styles"
import { useEffect, useState } from "react";
import { api } from '../../services/api'

interface UserProps{
    name: string;
    id: number;
    species: string;
    image: string;
    status: string;
}

export function Home(){

const [characters, setCharacters] = useState<UserProps[]>([]);

useEffect(() => {
  api
    .get("/character/?page=1")
    .then((response) => setCharacters(response.data.results))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);


    return(
        <Container>
            <ul className='card'>
                {characters.map(character => {
                    return (
                            <li key={character.id}>
                                <h1>{character.name}</h1>
                                <h2>{character.species}</h2>
                                <img src={character.image} alt={character.name} />
                                <div className="status">
                                    <span className={"dot " + character.status}></span>
                                    <h3 className={character.status}>{character.status}</h3>
                                </div>
                            </li>
                    )
                })}
                </ul>
            <button>Next Page</button>
        </Container>
    )
}