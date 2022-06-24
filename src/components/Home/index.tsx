import { Container } from "./styles"

type Home = {
    name: string
}

export function Home({ name }: Home){
    return(
        <Container>
            <div className='card'>
                <h1>{name}</h1>
            </div>
        </Container>
    )
}