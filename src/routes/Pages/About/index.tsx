import {Container, Image, TextAbout } from "./styles"
import profile from "../../../assets/images/1648330118745.jpg"

function About() {
    return(
        <Container>
            <Image><img src={profile} /></Image>
            <TextAbout>Olá eu sou o Mateus, sou estudando de Análise e Desenvolvimento de Sistemas
                na faculdade Estácio de Sá, hoje busco a primeira oportunidade na área da tecnologia,
                especificamente em front-end. <br />
                Atualmente estudo HTML5, CSS3, Javascript, e uso o framework React, e estou fazendo a 
                estilização com Styled-components.
                Sou um profissional comprometido, centrado e que trabalha bem em equipe.
            </TextAbout>
        </Container>
    )
}

export default About