import * as Yup from "yup";

const ValidationRegisterUserSchema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string()
        .email('Email inválido')
        .required('Email é obrigatório'),
    senha: Yup.string()
        .min(6, "A senha precisa ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    idTipo: Yup.number()
        .oneOf([1, 2], "Função inválida")
        .required("Função é obrigatória"),
});

export default ValidationRegisterUserSchema;