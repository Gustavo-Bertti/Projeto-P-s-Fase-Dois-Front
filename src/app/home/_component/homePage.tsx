'use client';

import { paths } from "@/config/path";
import { Postagem } from "@/types/Postagem";
import axios from "axios";
import { Formik } from "formik";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";



const HomePage = () => {
    const [posts, setPosts] = useState<Postagem[]>([]);
    const searchPosts = async (termo: string, { resetForm }: { resetForm: () => void }) => {
        try {
            const { data } = await axios.get('/api/searchPost', {
                headers: {
                    termo
                }
            });
            setPosts(data.posts);
            resetForm();
            console.log('Posts buscados:', data.posts);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
        }
    }
    const getPosts = useCallback(async () => {
        try {
            const { data } = await axios.get('/api/getAllPost');
            setPosts(data.posts);
            console.log('Posts:', data.posts);
        } catch (error) {
            console.error('Erro ao buscar posts:', error);
        }
    }, []);
    useEffect(() => {
        getPosts();
    }, [getPosts]);
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Bem-vindo à Página Inicial</h1>
            <Formik initialValues={{ search: '' }} onSubmit={async (values, formikHelpers) => { searchPosts(values.search, formikHelpers) }}>
                {({ values, handleChange, handleSubmit, isSubmitting }) => (
                    <form onSubmit={handleSubmit} className="mb-4">
                        <input
                            type="text"
                            name="search"
                            value={values.search}
                            onChange={handleChange}
                            placeholder="Pesquisar posts..."
                            className="border p-2 rounded w-full"
                        />
                        <button disabled={isSubmitting} type="submit" className="mt-2 bg-blue-500 text-white p-2 rounded">Pesquisar</button>
                        <button type="button" onClick={getPosts} className="mt-2 ml-2 bg-gray-500 text-white p-2 rounded">Ver Todos</button>
                    </form>
                )}
            </Formik>
            {posts.length === 0 ? (
                <p>Nenhum post disponível.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="mb-4 p-4 border rounded shadow">
                            <h2 className="text-2xl font-semibold">{post.titulo}</h2>
                            <p className="text-sm text-gray-500">Publicado em: {new Date(post.dataCriacao).toLocaleDateString()}</p>
                            <Link href={paths.details.getHref(post)} className="text-blue-500 hover:underline">Ver Detalhes</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;