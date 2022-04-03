import Button from "../Button";
import { Container, Image, Text, DivButtons } from "./styles";

export interface Props {
  children: string;
  image: string;
  isView: boolean;
  code: string;
  site: string;
}

const Card = (props: Props) => {
  const { children, image, isView, code, site } = props;

  const handleClickSite = () => {
    window.location.href = site
  }

  const handleClickCode = () => {
    window.location.href = code
  }

  console.log(props);

  return (
    <Container>
      <Image>
        <img src={image} />
      </Image>
      <Text>{children}</Text>
      <DivButtons>
        <Button isClick={true} onclick={handleClickSite}>Site</Button>
        {isView ? <Button isClick={true} onclick={handleClickCode} >Código</Button> : null}
      </DivButtons>
    </Container>
  );
};

export default Card;
