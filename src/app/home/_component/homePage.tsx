'use client';

import { Postagem } from "@/types/Postagem";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";



const HomePage = () => {
    const [posts, setPosts] = useState<Postagem[]>([]);
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
            {posts.length === 0 ? (
                <p>Nenhum post disponível.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id} className="mb-4 p-4 border rounded shadow">
                            <h2 className="text-2xl font-semibold">{post.titulo}</h2>
                            <p className="text-sm text-gray-500">Publicado em: {new Date(post.dataCriacao).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default HomePage;