import { Container } from "./styles";


export function LoadingSpinner(){

    return(
        <Container>
            <div className="spinner-container">
                <div className="loading-spinner"></div>
            </div>
        </Container>
    )
}