import {Component} from "react";
import Title from "../components/typography/Title";
import styled from "styled-components";
import Button from "../components/buttons/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

class NotFound extends Component {
    goToHome = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <Wrapper>
                <Title>Nie znaleziono strony</Title>
                <Button onClick={this.goToHome}>Przejdź na stronę główną</Button>
            </Wrapper>
        );
    }
}

export default NotFound