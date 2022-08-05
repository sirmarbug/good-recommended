import {Component} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextInput from "../../components/forms/TextInput";
import Button from "../../components/buttons/Button";
import TextButton from "../../components/buttons/TextButton";
import InputGroup from "../../components/forms/InputGroup";
import Subtitle from "../../components/typography/Subtitle";
import Label from "../../components/typography/Label";

class Login extends Component {
    login = () => {
        this.props.history.push('/dashboard')
    }

    render() {
        return (
            <AuthLayout>
                <Subtitle>Zaloguj się aby korzystać z aplikacji</Subtitle>
                <InputGroup>
                    <Label>Adres E-mail</Label>
                    <TextInput/>
                </InputGroup>
                <InputGroup>
                    <Label>Hasło</Label>
                    <TextInput/>
                </InputGroup>
                <Button onClick={this.login}>Zaloguj</Button>
                <TextButton to="/register">Nie masz jeszcze konta? Zarejestruj się</TextButton>
            </AuthLayout>
        )
    }
}

export default Login