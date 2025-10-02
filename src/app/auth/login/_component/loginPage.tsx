'use client';

import { paths } from "@/config/path";
import LoginDto from "@/types/LoginDto";
import LoginUserSchema from "@/validations/schemas/LoginUserSchema";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";


const LoginPage = () => {
    const route = useRouter();
    const login = async (values: LoginDto, { resetForm }: { resetForm: () => void }) => {
        try {
            const res = await axios.post('/api/login', values);

            if (res.data.success) {
                resetForm();
                route.push(paths.home.getHref());
            } else {
                alert('Login inválido.');
            }
        } catch (error) {
            alert('Erro ao tentar logar.');
            console.error(error);
        }
    }
    return (
        <Formik
            initialValues={{ email: '', senha: '' }}
            onSubmit={(values, formikHelpers) => login(values, formikHelpers)}
            validationSchema={LoginUserSchema}>
            {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h1 className="text-3xl font-bold mb-6">Login</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                            />
                            {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="senha">
                                Senha
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="senha"
                                name="senha"
                                value={values.senha}
                                onChange={handleChange}
                                type="password"
                                placeholder="******************"
                            />
                            {errors.senha && <p className="text-red-500 text-xs italic">{errors.senha}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                                type="button"
                                disabled={isSubmitting}
                                onClick={() => handleSubmit()}
                            >
                                Entrar
                            </button>

                            <Link href="/auth/registerUser" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
                                Registrar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    );
}
export default LoginPage;