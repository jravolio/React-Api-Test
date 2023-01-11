import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { LoadingSpinner } from "../LoadingSpinner";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Header } from "../Header";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Fade } from "react-awesome-reveal";

interface UserProps {
  name: string;
  id: number;
  species: string;
  image: string;
  status: string;
}

export function Home() {
  const [characters, setCharacters] = useState<UserProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    getCharacters(1);
  }, []);

  const getCharacters = async (currentPage: number) => {
    setIsLoading(true);
    await api
      .get(`/character/?page=${currentPage}`)
      .then((response: any) => {
        setCharacters(response.data.results);
        setPages(response.data.info.pages);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    setIsLoading(false);
  };

  const handleChange = async (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    await getCharacters(value);
  };

  const renderUser = (
    <ul className={styles.cards}>
      {characters.map((character) => {
        return (
          <Fade key={character.id}>
            <Card key={character.id} className={styles.cardContent}>
              <h1>{character.name}</h1>
              <h2>{character.species}</h2>
              <CardMedia component='img' image={character.image} alt={character.name} className={styles.cardMedia}/>
              <div className='status'>
                <div className={'dot ' + character.status}></div> 
                <h3 className={character.status}>{character.status}</h3>
              </div>
            </Card>
          </Fade>
        );
      })}
    </ul>
  );

  return (
    <>
    
      <header>
        <Header />
      </header>

      {isLoading ? <LoadingSpinner /> : renderUser}

      <Stack spacing={2}>
        <Pagination
          className={styles.pagination}
          count={pages}
          color="secondary"
          onChange={handleChange}
        />
      </Stack>
    </>
  );
}
