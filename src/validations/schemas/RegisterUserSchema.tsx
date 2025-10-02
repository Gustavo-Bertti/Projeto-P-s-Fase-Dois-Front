import * as Yup from "yup";

const ValidationRegisterUserSchema = Yup.object().shape({
    username: Yup.string().required("Nome é obrigatório"),
    password: Yup.string()
        .min(6, "A senha precisa ter pelo menos 6 caracteres")
        .required("Senha é obrigatória"),
    role: Yup.string().oneOf(['aluno', 'professor'], "Função inválida").required("Função é obrigatória"),
});

export default ValidationRegisterUserSchema;