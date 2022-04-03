import Cards from "../../../components/Cards";
import { Container } from "./styles";
import logo from "../../../assets/images/1648330118745.jpg"

function Project() {

  const codeRick = "https://github.com/MateusLouzada/rick-and-morty"
  const siteRick = "https://mateuslouzada.github.io/rick-and-morty/"

  return (
    <Container>
      <Cards code={codeRick} site={siteRick} image={logo} isView={true}>Texto sobre o projeto</Cards>
    </Container>
  )
}

export default Project;
