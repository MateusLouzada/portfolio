import { Container } from "./styles"
import Switch from "react-switch"
import { ThemeContext } from "styled-components"
import { useContext } from "react" 
import {shade} from 'polished'

interface Props {
    toggleTheme(): void;
}

function SwitchTheme({toggleTheme} : Props ){
    const {colors, title} = useContext(ThemeContext)

      return (
        <Container>
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

export default SwitchTheme;
