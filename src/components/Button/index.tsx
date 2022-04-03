import { Container } from "./styles";

interface Props {
    children?:string
    isClick?:boolean
    onclick?():void
}

function Button({isClick = false, children, onclick = undefined}: Props) {

    return (
        <Container onClick={(isClick) ? onclick : undefined}>
            {children}
        </Container>
    )
}

export default Button
