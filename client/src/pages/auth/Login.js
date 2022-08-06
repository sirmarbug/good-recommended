import {Component} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextInput from "../../components/forms/TextInput";
import Button from "../../components/buttons/Button";
import TextButton from "../../components/buttons/TextButton";
import InputGroup from "../../components/forms/InputGroup";
import Subtitle from "../../components/typography/Subtitle";
import Label from "../../components/typography/Label";
import {Formik} from "formik";
import {loginValidationSchema} from '../../helpers/validations'
import MyForm from "../../components/forms/MyForm";
import MyErrorMessage from "../../components/forms/MyErrorMessage";
import {login} from "../../api/auth";

class Login extends Component {
    loginHandle = async (values, other) => {
        try {
            const { data } = await login(values)
            localStorage.setItem('token', data.token)
            this.props.history.push('/dashboard')
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        return (
            <AuthLayout>
                <Subtitle>Zaloguj się aby korzystać z aplikacji</Subtitle>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={loginValidationSchema}
                    onSubmit={this.loginHandle}
                >
                    {({ isSubmitting }) => (
                        <MyForm>
                            <InputGroup>
                                <Label>Adres E-mail</Label>
                                <TextInput type="text" name="email" />
                                <MyErrorMessage name="email" component="div" />
                            </InputGroup>
                            <InputGroup>
                                <Label>Hasło</Label>
                                <TextInput type="password" name="password" />
                                <MyErrorMessage name="password" component="div" />
                            </InputGroup>
                            <Button type="submit" disabled={isSubmitting}>Zaloguj</Button>
                        </MyForm>
                    )}
                </Formik>
                <TextButton to="/register">Nie masz jeszcze konta? Zarejestruj się</TextButton>
            </AuthLayout>
        )
    }
}

export default Login