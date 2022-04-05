import { Container } from "./styles";

interface Props {
    children?:string
    isClick?:boolean
    onclick?():void
    size?:string
}

function Button({isClick = false, children, onclick = undefined, size = '180'}: Props) {

    return (
        <Container size={size} onClick={(isClick) ? onclick : undefined}>
            {children}
        </Container>
    )
}

export default Button
