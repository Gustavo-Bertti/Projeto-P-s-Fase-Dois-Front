import * as Yup from 'yup';

const LoginUserSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, 'Nome precisa ter no minimo 3 caracteres')
        .max(30, 'Nome nao pode exceder 30 caracteres')
        .required('Nome é obrigatório'),
    password: Yup.string()
        .min(6, 'Senha precisa ter no minimo 6 caracteres')
        .max(100, 'Senha precisa ter no maximo 100 caracteres')
        .required('Senha é obrigatória'),
});

export default LoginUserSchema;