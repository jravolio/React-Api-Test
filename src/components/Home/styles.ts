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
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    padding: 3.625rem 1rem;
    margin: 1.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;
    color: #f2f2f2;
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


.pagination{
        display: flex;
        justify-content: center;
        list-style: none;

        padding: 1rem;
        margin-top: 0.5rem;

        flex-wrap: wrap;

        background-color: #131518;
        opacity: 0.9;
    }
    
    .page-item{

        cursor: pointer;

        border-radius: 16px;

        color: #f2f2f2;

        margin-bottom: 1rem;

        border: 1px solid #d7d7d7;

        background-color: #312921;
        
        & + .page-item{
            margin-left: 1rem;
        }

        &.active{
            background-color: #0093E9;
        }

        &.disabled{
            opacity: 0.5;
        }

        &.disabled:hover{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }

    .page-link{
        padding: 1rem;
    }
    
    .break{
        margin-left: 1rem;
        margin-right: 1rem;
        margin-top: 0.3rem;
        color: #f2f2f2;
        cursor: pointer;    
    }

`