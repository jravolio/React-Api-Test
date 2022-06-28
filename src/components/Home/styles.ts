import styled from "styled-components";

export const Container = styled.div`

.card{
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
    column-gap: 3rem;
    row-gap: 4rem;

    font-family: 'Montserrat', sans-serif;
}

.card li{
    background: rgba( 255, 255, 255, 0.3 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 5px );
    -webkit-backdrop-filter: blur( 5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
    padding: 3.625rem 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    margin-top: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
}

.card h2{
    margin-bottom: 1rem;
    font-weight: 400;
}

.card h1{
    font-weight: 600;
}


.status{
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: auto;
    margin-top: 2.5rem;
    font-size: 1.5rem;

    text-shadow: 0.5px 0.5px black;

    h3.Alive{
        color: #34A300;
    }

    h3.Dead{
        color: #EE6352;
    }

    h3.unknown{
        color: #FBD188;
    }
}

.dot{
    height: 23px;
    width: 23px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block;
    margin-right: 0.5rem;

    &.Alive{
        background-color: #34A300;
    }

    &.Dead{
        background-color: #EE6352;
    }

    &.unknown{
        background-color: #FBD188;
    }
}

`