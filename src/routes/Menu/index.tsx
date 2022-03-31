import { Container, Button } from "./style";
import { Routes, Route, Link } from "react-router-dom";
import Project from "../Pages/Project";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

function Menu() {
  return (
    <Container>
      <Routes>
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
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
