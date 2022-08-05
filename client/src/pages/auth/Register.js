import {Component} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextButton from "../../components/buttons/TextButton";
import Subtitle from "../../components/typography/Subtitle";
import InputGroup from "../../components/forms/InputGroup";
import Label from "../../components/typography/Label";
import TextInput from "../../components/forms/TextInput";
import Button from "../../components/buttons/Button";

class Register extends Component {
    register = () => {}

    render() {
        return (
            <AuthLayout>
                <Subtitle>Zarejestruj się aby utworzyć konto i zacząć korzystać z aplikacji</Subtitle>
                <InputGroup>
                    <Label>Imię</Label>
                    <TextInput/>
                </InputGroup>
                <InputGroup>
                    <Label>Nazwisko</Label>
                    <TextInput/>
                </InputGroup>
                <InputGroup>
                    <Label>Adres E-mail</Label>
                    <TextInput/>
                </InputGroup>
                <InputGroup>
                    <Label>Hasło</Label>
                    <TextInput/>
                </InputGroup>
                <InputGroup>
                    <Label>Powtórz hasło</Label>
                    <TextInput/>
                </InputGroup>
                <Button onClick={this.register}>Zarejestruj się</Button>
                <TextButton to="/login">Masz już konto? Zaloguj się</TextButton>
            </AuthLayout>
        )
    }
}

export default Register