import { GlobalStyle } from './styles/App';
import { Home } from './components/Home/index'

export function App() {
  return (
    <>
      <GlobalStyle/>
      <div className="App">
        <Home/>
      </div>
    </>
  );
}
