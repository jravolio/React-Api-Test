import { GlobalStyle } from './styles/App';
import { Home } from './components/Home/index'
import { useState, useEffect } from 'react';
import { api } from './services/api';

export function App() {

const [user,setUser] = useState([])

useEffect(() => {
  api
    .get("/users/jravolio")
    .then((response) => setUser(response.data))
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}, []);

  return (
    <>
      <GlobalStyle/>
      <div className="App">
        {user.map(user =>(
          <Home name= {user.name}/>
        ))}
      </div>
    </>
  );
}
