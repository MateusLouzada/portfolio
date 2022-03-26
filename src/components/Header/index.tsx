import { Container } from "./styles"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { useContext } from "react" 
import {shade} from 'polished'

interface Props {
    toggleTheme(): void;
}

function Header({toggleTheme} : Props ){
    const {colors, title} = useContext(ThemeContext)

      return (
        <Container> 
            Hello World
            <Switch 
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={40}
                handleDiameter={20}
                offColor={shade(0.1, colors.primary)}
                onColor={colors.secundary}
            />
        </Container>
      )
}

// interface Props {
//     toggleTheme(): void;
// }

// const Header: React.FC<Props> = ({toggleTheme}) => {
//     const {colors, title} = useContext(ThemeContext)

//   return (
//     <Container> 
//         Hello World
//         <Switch 
//             onChange={toggleTheme}
//             checked={title === 'dark'}
//             checkedIcon={false}
//             uncheckedIcon={false}
//             height={10}
//             width={40}
//             handleDiameter={20}
//             offColor={shade(0.1, colors.primary)}
//             onColor={colors.secundary}
//         />
//     </Container>
//   )
// }

export default Header;