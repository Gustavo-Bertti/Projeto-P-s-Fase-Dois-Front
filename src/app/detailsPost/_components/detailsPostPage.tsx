'use client';
import { paths } from "@/config/path";
import { Postagem } from "@/types/Postagem";
import Link from "next/link";
import { useEffect, useState } from "react";




const DetailsPostPage = () => {
    const [post, setPost] = useState<Postagem | null>(null);
    useEffect(() => {
        const url = new URL(window.location.href);
        const encodedElement = url.searchParams.get("element");

        if (encodedElement) {
            try {
                const decoded = decodeURIComponent(encodedElement);
                const parsed: Postagem = JSON.parse(decoded);
                setPost(parsed);
            } catch (error) {
                console.error("Erro ao fazer parse do elemento:", error);
            }
        }
    }, []);
    return post ? (
        <div className="container mx-auto p-4">
            <Link href={paths.home.getHref()} className="text-blue-500 hover:underline mb-4 inline-block">
                ← Voltar para a Página Inicial
            </Link>
            <h1 className="text-3xl font-bold mb-4">Detalhes do Post</h1>
            <div className="mb-4 p-4 border rounded shadow">
                <h2 className="text-2xl font-semibold">{post.titulo}</h2>
                <p className="text-sm text-gray-500">
                    Publicado em: {new Date(post.dataCriacao).toLocaleDateString()}
                </p>
                <p className="mt-2">{post.conteudo}</p>
            </div>
        </div>
    ) : (
        <div className="container mx-auto p-4">
            <p>Post não encontrado ou incompleto.</p>
            <Link href={paths.home.getHref()} className="text-blue-500 hover:underline">
                ← Voltar para a Página Inicial
            </Link>
        </div>
    );
}

export default DetailsPostPage;