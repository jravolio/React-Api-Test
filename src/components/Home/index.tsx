import { Container } from "./styles"
import { useEffect, useState } from "react";
import { api } from '../../services/api'
import ReactPaginate from "react-paginate";
import { LoadingSpinner } from '../LoadingSpinner'

interface UserProps{
    name: string;
    id: number;
    species: string;
    image: string;
    status: string;
}

export function Home(){

const [characters, setCharacters] = useState<UserProps[]>([]);

const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    getCharacters(1)
}, []);

const getCharacters = async (currentPage: number) =>{
    setIsLoading(true)
    await api
        .get(`/character/?page=${currentPage}`)
        .then((response) => setCharacters(response.data.results))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    setIsLoading(false)
}  

const handlePageClick = async (data: { selected: any; }) =>{
    const currentPage = data.selected + 1

    await getCharacters(currentPage)

    window.scrollTo(0,0)
  }


  const renderUser = (
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
  )

    return(
        <Container>
            
                {isLoading ? <LoadingSpinner /> : renderUser}

                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={42}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={3}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    pageClassName={'page-item'}
                    pageLinkClassName={'page-link'}
                    previousClassName={'page-item'}
                    previousLinkClassName={'page-link'}
                    nextClassName={'page-item'}
                    nextLinkClassName={'page-link'}
                    breakLinkClassName={'page-link'}
                    activeClassName={'active'}
                />
        </Container>
    )
}