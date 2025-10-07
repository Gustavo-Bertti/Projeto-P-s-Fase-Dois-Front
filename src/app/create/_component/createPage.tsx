'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const CreatePostPage = () => {
  const router = useRouter();
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [autor, setAutor] = useState('');
  const handleCreate = async () => {
    try {
      await axios.post('/api/createPost', { titulo, conteudo, autor });
      router.push('/manager');
    } catch (err) {
      console.error('Erro ao criar post:', err);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Criar Novo Post</h1>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
      />
      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Descrição"
        value={conteudo}
        onChange={e => setConteudo(e.target.value)}
      />
      <button
        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
        onClick={handleCreate}
      >
        Criar
      </button>
    </div>
  );
};

export default CreatePostPage;
