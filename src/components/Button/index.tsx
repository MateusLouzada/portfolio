import { Container } from "./styles";

interface Props {
    children:string
}

function Button(props: Props) {
    const {children} = props

    return (
        <Container>
            {children}
        </Container>
    )
}

export default Button
