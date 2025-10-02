'use client';

import { paths } from "@/config/path";
import CreateUserDto from "@/types/CreateUserDto";
import ValidationRegisterUserSchema from "@/validations/schemas/RegisterUserSchema";
import axios from "axios";
import { Formik } from "formik";
import { useRouter } from "next/navigation";




const RegisterUser = () => {
    const route = useRouter();
    const create = async (
        values: CreateUserDto,
        { resetForm }: { resetForm: () => void }
    ) => {
        try {
            const res = await axios.post('/api/createUser', values);

            if (res.data.success) {
                alert('Usuário criado com sucesso!');
                resetForm();
                route.push(paths.auth.login.getHref());
            } else {
                alert('Erro ao criar usuário. Tente novamente.');
            }
        } catch (err) {
            console.error(err);
            alert('Erro ao criar usuário. Verifique os dados e tente novamente.');
        }
    };

    return (

        <Formik
            initialValues={{ nome: '', email: '', senha: '', idTipo: 0 }}
            onSubmit={(values, formikHelpers) => create(values, formikHelpers)}
            validationSchema={ValidationRegisterUserSchema}
        >
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h1 className="text-4xl font-bold mb-8">Registrar Usuário</h1>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
                                Nome
                            </label>
                            <input
                                name="nome"
                                value={values.nome}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nome"
                                type="text"
                                placeholder="nome"
                            />
                            {errors.nome && <p className="text-red-500 text-xs italic">{errors.nome}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Nome
                            </label>
                            <input name="email"
                                value={values.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email" />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
                                Senha
                            </label>
                            <input
                                name="senha"
                                value={values.senha}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="senha"
                                type="password"
                                placeholder="******************"
                            />
                            {errors.senha && <p className="text-red-500 text-xs italic">{errors.senha}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idTipo">
                                Função
                            </label>
                            <select
                                name="idTipo"
                                value={values.idTipo}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Selecione uma função</option>
                                <option value="1">Aluno</option>
                                <option value="2">Professor</option>
                            </select>
                            {errors.idTipo && <p className="text-red-500 text-xs italic">{errors.idTipo}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                type="button"
                                onClick={() => handleSubmit()}
                                disabled={isSubmitting}
                            >
                                Registrar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Formik>

    );
};

export default RegisterUser;
