'use client';

import { Formik } from "formik";
import Link from "next/link";
import LoginUserSchema from "../validations/schemas/LoginUserSchema";

const Page = () => {
    const Login = (values: { username: string, password: string }) => {
        console.log("Dados enviados:", values);
    }
    return (
        <Formik initialValues={{ username: '', password: '' }} onSubmit={(values) => { Login(values) }} validationSchema={LoginUserSchema}>
            {({ values, errors, handleChange, handleSubmit }) => (
                <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                        <h1 className="text-3xl font-bold mb-6">Login</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Nome
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
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
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                name="password"
                                value={values.password}
                                onChange={handleChange}
                                type="password"
                                placeholder="******************"
                            />
                            {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => handleSubmit()}
                            >
                                Entrar
                            </button>

                            <Link href="/registerUser" className="inline-block align-baseline font-bold text-sm text-indigo-500 hover:text-indigo-800">
                                Registrar
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </Formik>
    );
}
export default Page;