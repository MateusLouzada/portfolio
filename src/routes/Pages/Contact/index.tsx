import { Container, Email, Phone } from "./styles";

function Contact() {
  return (
    <Container>
      <Email>
        <h3>Email para contato:</h3>
        <p>mateuslouzada01@gmail.com</p>
      </Email>
      <Phone>
        <h3>Telefone para contato:</h3>
        <p>(32)99105-6904</p>
      </Phone>
    </Container>
  );
}

export default Contact;
