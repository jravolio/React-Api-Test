import { Container } from "./styles"
import repositoryImg from "../../assets/repository.svg"
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"
import portfolioImg from "../../assets/portfolio.svg"


export function Header(){


    return(
        <Container>
            <div className="header">
                <div>
                    <a href="/">Rick<span>Api.</span> <img className="portal" src="https://c.tenor.com/BgR83Df82t0AAAAi/portal-rick-and-morty.gif" alt="Rick and Morty portal" /></a>
                </div>
                <div className="links">
                    <a href="https://github.com/jravolio/React-Api-Test" target="_blank" rel="noopener noreferrer">
                        <img src={repositoryImg} alt="Repositório"/>
                    </a>
                    <a href="https://devjravolio.com/" target="_blank" rel="noopener noreferrer">
                        <img src={portfolioImg} alt="Portifólio"/>
                    </a>
                    <a href="https://www.linkedin.com/in/julio-cesar-junior-0042231b2/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinImg} alt="Linkedin"/>
                    </a>
                    <a href="https://github.com/jravolio" target="_blank" rel="noopener noreferrer">
                        <img src={githubImg} alt="Github"/>
                    </a>
                </div>
            </div>
        </Container>
    )
}