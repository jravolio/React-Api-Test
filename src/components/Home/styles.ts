import styled from "styled-components";

export const Container = styled.div`

.card{
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    padding: 3.625rem 1rem;
    
    display: block;
    text-align: center;

    font-family: 'Montserrat', sans-serif;

    margin-top: 2rem;

}

.card h2{
    margin-bottom: 1rem;
    font-weight: 400;
}

.card h1{
    font-weight: 600;
}
img{
    width: 350px;
    height: 300px;
}

`