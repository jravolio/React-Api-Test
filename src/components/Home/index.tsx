import { Container } from "./styles"

type Home = {
    name: string,
    imageUrl: string,
}

export function Home({ name, imageUrl }: Home){
    console.log(imageUrl)
    console.log(name)
    return(
        <Container>
            <div className='card'>
                <h1>{name}</h1>
                <img src={imageUrl} alt={name} />
            </div>
        </Container>
    )
}