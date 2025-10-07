'use client';

import { useEffect, useState } from 'react';
import { Postagem } from '@/types/Postagem';
import axios from 'axios';

const ManagerPage = () => {
  const [posts, setPosts] = useState<Postagem[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('/api/getByUserId');
        setPosts(data.posts || data);
        console.log('Posts do usuário logado:', data);
      } catch (err) {
        console.error('Erro ao buscar posts do usuário:', err);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Gerenciamento de posts</h1>

      {posts.length === 0 ? (
        <p>Nenhum post disponível.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4 p-4 border rounded shadow">
              <h2 className="text-2xl font-semibold">{post.titulo}</h2>
              <p className="text-sm text-gray-500">
                Publicado em: {new Date(post.dataCriacao).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManagerPage;
