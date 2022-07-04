import { GlobalStyle } from './styles/App';
import { Home } from './components/Home/index'
import { Header } from './components/Header';

export function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <div className="App">
        <Home/>
      </div>
    </>
  );
}
