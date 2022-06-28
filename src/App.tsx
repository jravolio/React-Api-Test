import { GlobalStyle } from './styles/App';
import { Home } from './components/Home/index'

export function App() {
<<<<<<< HEAD
=======

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

>>>>>>> 821e3156414cc1966f77ea9bc7d3bb4df24b9a50
  return (
    <>
      <GlobalStyle/>
      <div className="App">
<<<<<<< HEAD
        <Home/>
=======
        {character.map((char,index) =>(
          <Home key= {index} name= {char.name} imageUrl = {char.image}/>
        ))}
>>>>>>> 821e3156414cc1966f77ea9bc7d3bb4df24b9a50
      </div>
    </>
  );
}
