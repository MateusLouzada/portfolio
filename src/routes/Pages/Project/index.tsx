import Cards from "../../../components/Cards";
import { Container } from "./styles";
import logo from "../../../assets/images/1648330118745.jpg";

function Project() {
  const codePortfolio = "https://github.com/MateusLouzada/portfolio";

  const codeRick = "https://github.com/MateusLouzada/rick-and-morty";
  const siteRick = "https://mateuslouzada.github.io/rick-and-morty/";

  const codeJuros = "https://github.com/MateusLouzada/react-juros";
  const siteJuros = "https://mateuslouzada.github.io/react-juros/";

  const codeSalario = "https://github.com/MateusLouzada/react-salario";
  const siteSalario = "https://mateuslouzada.github.io/react-salario/";

  const codePaises = "https://github.com/MateusLouzada/Projeto-paises";

  const codeLayout =
    "https://github.com/MateusLouzada/Challenge_Layout_Front-end";
  const siteLayout =
    "https://mateuslouzada.github.io/Challenge_Layout_Front-end/";

  const codeGorjeta =
    "https://github.com/MateusLouzada/tip-calculator-app-main";
  const siteGorjeta =
    "https://mateuslouzada.github.io/tip-calculator-app-main/";

  return (
    <Container>
      <Cards title="Portfólio" code={codePortfolio} image={logo} isView={false}>
        Este é meu último projeto e nele eu consegui evoluir bastante, foi o
        primeiro projeto utilizando Typescript, e a estilização dele fiz todo
        com styled-components, aprendi a fazer temas para o site, e evolui na
        utilização dele de forma mais organizada, e usar melhor o React Router
        Dom para fazer uma SPA (Single Page Application) mais eficiênte. E um
        outro ponto positivo foi a forma da organização do código que pesquisei
        como usar pastas e arquivos de forma mais eficiênte.
      </Cards>
      <Cards title="Rick and Morty" code={codeRick} site={siteRick} image={logo} isView={true}>
        Neste projeto eu consumi a API rick and morty, e coloquei em tela os
        personagens, lugares e episódios da série. Separei ele em SPA (Single
        Page Application), usando o React Router Dom, e estilizei usando um
        pouco de Material UI e styled-components.
      </Cards>
      <Cards title="Calculadora de Juros" code={codeJuros} site={siteJuros} image={logo} isView={true}>
        Este projeto eu utilizei React junto com Material UI para estilizar,
        fazia parte de uma atividade no bootcamp de Desenvolvedor Fullstack da
        IGTI. Ele é um projeto simples onde calcula o valor que será gerado
        conforme os inputs do usuário.
      </Cards>
      <Cards title="Calculadora de Salários" code={codeSalario} site={siteSalario} image={logo} isView={true}>
        Esse projeto também era uma atividade do bootcamp da IGTI, nele eu
        utilizei React, e para estilizar usei Materialize-css. O propósito dele
        é calcular os descontos do salário do usuário e exibir em tela o salário
        líquido e cada desconto que foi calculado.
      </Cards>
      <Cards title="Desafio Países" code={codePaises} image={logo} isView={false}>
        Esse projeto era um desafio do site FrontEnd Mentor, o objetivo dele é
        consumir uma api de países, e conseguir colocar em tela os países e seus
        detalhes assim como filtrar cada um por região. Neste projeto utilizei
        javascript, css3 e html5
      </Cards>
      <Cards title="Desafio Layout Blog" code={codeLayout} site={siteLayout} image={logo} isView={true}>
        Desafio também retirado do FrontEnd Mentor, ele é bem simples, mas foi
        um dos primeiros projetos que fiz, por isso decidi deixá-lo aqui, ele
        consiste em reproduzir uma página de blog. Neste projeto utilizei
        somente html5 e css3.
      </Cards>
      <Cards title="Calculadora de Gorjetas" code={codeGorjeta} site={siteGorjeta} image={logo} isView={true}>
        Outro desafio do FrontEnd Mentor, ele consiste em fazer uma calculadora
        de gorjetas. Neste eu utilizei javascript, css3 e html5.
      </Cards>
    </Container>
  );
}

export default Project;
