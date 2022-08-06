import {Component} from "react";
import AuthLayout from "../../layouts/AuthLayout";
import TextButton from "../../components/buttons/TextButton";
import Subtitle from "../../components/typography/Subtitle";
import InputGroup from "../../components/forms/InputGroup";
import Label from "../../components/typography/Label";
import TextInput from "../../components/forms/TextInput";
import Button from "../../components/buttons/Button";
import {register} from "../../api/auth";
import MyForm from "../../components/forms/MyForm";
import {registerValidationSchema} from "../../helpers/validations";
import {Formik} from "formik";
import MyErrorMessage from "../../components/forms/MyErrorMessage";

class Register extends Component {
    registerHandle = async (values) => {
        console.log('values', values)
        try {
            await register(values)
            this.props.history.push('/login')
        } catch (e) {
            console.error(e)
        }
    }

    render() {
        return (
            <AuthLayout>
                <Subtitle>Zarejestruj się aby utworzyć konto i zacząć korzystać z aplikacji</Subtitle>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={registerValidationSchema}
                    onSubmit={this.registerHandle}
                >
                    {({ isSubmitting }) => (
                        <MyForm>
                            <InputGroup>
                                <Label>Imię</Label>
                                <TextInput name="firstName"/>
                                <MyErrorMessage name="firstName" component="div" />
                            </InputGroup>
                            <InputGroup>
                                <Label>Nazwisko</Label>
                                <TextInput name="lastName"/>
                                <MyErrorMessage name="lastName" component="div" />
                            </InputGroup>
                            <InputGroup>
                                <Label>Adres E-mail</Label>
                                <TextInput name="email"/>
                                <MyErrorMessage name="email" component="div" />
                            </InputGroup>
                            <InputGroup>
                                <Label>Hasło</Label>
                                <TextInput type="password" name="password"/>
                                <MyErrorMessage name="password" component="div" />
                            </InputGroup>
                            <InputGroup>
                                <Label>Powtórz hasło</Label>
                                <TextInput type="password" name="confirmPassword"/>
                                <MyErrorMessage name="confirmPassword" component="div" />
                            </InputGroup>
                            <Button type="submit" disabled={isSubmitting}>Zarejestruj się</Button>
                        </MyForm>
                    )}
                </Formik>
                <TextButton to="/login">Masz już konto? Zaloguj się</TextButton>
            </AuthLayout>
        )
    }
}

export default Register