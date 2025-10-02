'use client';

import ValidationRegisterUserSchema from "@/validations/schemas/RegisterUserSchema";
import { Formik, FormikHelpers } from "formik";



const RegisterUser = () => {
    const createUser = (values: { username: string, password: string, role: string }, { resetForm }: FormikHelpers<{ username: string, password: string, role: string }>) => {
        console.log("Dados enviados:", values);
        resetForm();
    }

    return (

        <Formik
            initialValues={{ username: '', password: '', role: '' }}
            onSubmit={(values, formikHelpers) => createUser(values, formikHelpers)}
            validationSchema={ValidationRegisterUserSchema}
        >
            {({ values, errors, handleChange, handleSubmit }) => (
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
                >
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h1 className="text-4xl font-bold mb-8">Registrar Usuário</h1>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Nome
                            </label>
                            <input
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Username"
                            />
                            {errors.username && <p className="text-red-500 text-xs italic">{errors.username}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Senha
                            </label>
                            <input
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="******************"
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                                Função
                            </label>
                            <select
                                name="role"
                                value={values.role}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="">Selecione uma função</option>
                                <option value="aluno">Aluno</option>
                                <option value="professor">Professor</option>
                            </select>
                            {errors.role && <p className="text-red-500 text-xs italic">{errors.role}</p>}
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                type="submit"
                            >
                                Registrar
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Formik>

    );
};

export default RegisterUser;
