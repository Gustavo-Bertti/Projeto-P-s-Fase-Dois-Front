import * as Yup from 'yup';

const LoginUserSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
    senha: Yup.string()
        .min(6, 'Senha precisa ter no minimo 6 caracteres')
        .max(100, 'Senha precisa ter no maximo 100 caracteres')
        .required('Senha é obrigatória'),
});

export default LoginUserSchema;