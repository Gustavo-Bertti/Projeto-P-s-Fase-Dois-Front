'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Postagem } from '@/types/Postagem';

const EditPostPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const elementParam = searchParams.get('element');
  const element: Postagem | null = elementParam
    ? JSON.parse(decodeURIComponent(elementParam))
    : null;

  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [ativo, setAtivo] = useState(true);

  useEffect(() => {
  if (element) {
    setTitulo(element.titulo); 
    setConteudo(element.conteudo);
    setAtivo(element.ativo);
  }
}, []);


  const handleUpdate = async () => {
    if (!element) return;

    try {
      await axios.put('/api/updatePost', {
  id: element.id,
  titulo,
  conteudo,
  ativo
});

      router.push('/manager');
    } catch (err) {
      console.error('Erro ao atualizar post:', err);
      alert('Erro ao atualizar post, verifique o console.');
    }
  };

  const handleBack = () => router.push('/manager');

  if (!element) return <p>Nenhum post encontrado.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Editar Post</h1>

      <input
        className="border p-2 w-full mb-2"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Descrição"
        value={conteudo}
        onChange={(e) => setConteudo(e.target.value)}
        rows={5}
      />

      <label className="flex items-center mb-4">
        <input
          type="checkbox"
          checked={ativo}
          onChange={(e) => setAtivo(e.target.checked)}
          className="mr-2"
        />
        Ativo
      </label>

      <div className="flex gap-2">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          onClick={handleUpdate}
        >
          Salvar
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded"
          onClick={handleBack}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default EditPostPage;
