import { Container } from "./style";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

function Menu() {
  return (
    <Container>
        <Link to="/projects">
          <Button>Projetos</Button>
        </Link>
        <Link to="/about">
          <Button>Um pouco sobre mim</Button>
        </Link>
        <Link to="/contact">
          <Button>Contato</Button>
        </Link>
        
    </Container>
  );
}

export default Menu;
