'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { paths } from "@/config/path";
import { Postagem } from '@/types/Postagem';

const ManagerPage = () => {
  const [posts, setPosts] = useState<Postagem[]>([]);

  const fetchPosts = async () => {
    try {
      const { data } = await axios.get('/api/getByUserId');
      setPosts(data.posts || data);
    } catch (err) {
      console.error('Erro ao buscar posts:', err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id: string) => {
    if (!confirm('Deseja realmente excluir este post?')) return;
    try {
      await axios.delete('/api/deletePost', { data: { id } });
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      console.error('Erro ao excluir post:', err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gerenciamento de Posts</h1>

      <Link href={paths.create.getHref()}>
        <button className="bg-green-500 hover:bg-green-700 text-white px-3 py-1 rounded ml-2">
          Criar Novo
        </button>
      </Link>

      <ul>
        {posts.map(post => (
          <li key={post.id} className="mb-4 p-4 border rounded shadow">
            <h2 className="text-2xl font-semibold">{post.titulo}</h2>
            <p className="text-sm text-gray-500 mb-1">{post.conteudo}</p>
            <div className="flex gap-2">
            <Link href={paths.update.getHref(post)}>
            <button className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-1 rounded">
              Editar
            </button>
          </Link>
              <button
                className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                onClick={() => deletePost(post.id)}
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManagerPage;
