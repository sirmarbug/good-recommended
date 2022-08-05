import {Component} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextButton from "../../components/buttons/TextButton";

class Register extends Component {
    render() {
        return (
            <AuthLayout>
                <h1>Widok rejestracji</h1>
                <TextButton to="/login">Logowanie</TextButton>
            </AuthLayout>
        )
    }
}

export default Register