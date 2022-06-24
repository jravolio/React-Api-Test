import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .App{
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #0d0d0d;
    }
`