import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    .App{
        position: absolute;
        background-color:rgb(32, 35, 41);
    }

    @media (min-width: 400px) {
        .App{
            width: 100%;
        }
    }

`