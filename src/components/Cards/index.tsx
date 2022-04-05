import Button from "../Button";
import { Container, Image, Text, DivButtons, Title } from "./styles";

export interface Props {
  children: string;
  image: string;
  isView: boolean;
  code: string;
  site?: string;
  title: string
}

const Card = (props: Props) => {
  const { children, image, isView, code, site, title } = props;

  const handleClickSite = () => {
   if(site) window.location.href = site
  }

  const handleClickCode = () => {
    window.location.href = code
  }

  console.log(props);

  return (
    <Container>
      <Title>
        {title}
      </Title>
      <Image>
        <img src={image} />
      </Image>
      <Text>{children}</Text>
      <DivButtons>
        <Button size="120" isClick={true} onclick={handleClickCode}>Código</Button>
        {isView ? <Button size="120" isClick={true} onclick={handleClickSite} >Site</Button> : null}
      </DivButtons>
    </Container>
  );
};

export default Card;
