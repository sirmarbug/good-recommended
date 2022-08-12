import * as Yup from 'yup'

export const loginValidationSchema = new Yup.ObjectSchema({
    email: Yup.string()
        .required('Adres E-mail jest wymagany')
        .email('Nieprawidłowy format adresu E-mail'),
    password: Yup.string()
        .required('Hasło jest wymagane')
})

export const registerValidationSchema = new Yup.ObjectSchema({
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string()
        .required('Adres E-mail jest wymagany')
        .email('Nieprawidłowy format adresu E-mail'),
    password: Yup.string()
        .required('Hasło jest wymagane'),
    confirmPassword: Yup.string()
        .required('Hasło jest wymagane')
        .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same')
})

export const recommendValidationSchema = new Yup.ObjectSchema({
    type: Yup.number(),
    name: Yup.string()
        .required('Nazwa jest wymagana'),
    description: Yup.string(),
    rating: Yup.number()
})