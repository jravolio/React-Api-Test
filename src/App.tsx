import { GlobalStyle } from './styles/App';
import { Home } from './components/Home/index'
import { useState, useEffect } from 'react';
import { api } from './services/api';

export function App() {

  interface UserProps {
    name: string;
    image: string;
    id: number;
  }

const [character, setCharacter] = useState<UserProps[]>([]);

useEffect(() => {
  api
    .get("/character")
    .then((response) => setCharacter([response.data.results]))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

  return (
    <>
      <GlobalStyle/>
      <div className="App">
        {character.map((char,index) =>(
          <Home key= {index} name= {char.name} imageUrl = {char.image}/>
        ))}
      </div>
    </>
  );
}
