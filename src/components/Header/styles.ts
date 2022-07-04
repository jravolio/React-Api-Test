import styled from "styled-components";

export const Container = styled.div`
    a {
        text-decoration: none;

        font-size: 2rem;
        font-weight: 600;

        color: #f2f2f2;

        span{
            color: #a8cc54;
        }

        img.portal{
            position:absolute;
            width: 70px;
            margin-top: -19px;
            margin-left: 0.3rem;
        }
    }

    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        background-color: #141414;
        
        .links{
            margin-top: 2.9rem;
            display: flex;
            width: 38%;
            justify-content: space-between;

            img{
                height: 2rem;
            }

            a{
                opacity: 0.2;
                transition: 0.3s;
            }

            a:hover{
                opacity: 1;
                transform: scale(1.2);
            }
        }
        
        div{
            margin: 2rem;
            position: relative;
        }
    } 
    @media (max-width: 425px) {
        .header{
            width: 27rem;
            
            .links{
                margin-right: 1rem;
            }
        }
    }
`