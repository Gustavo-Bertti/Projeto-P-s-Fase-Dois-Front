import { NextResponse } from 'next/server';

import { getAllPosts } from '@/libs/api/services/post';

export async function GET() {
    try {
        const posts = await getAllPosts();
        return NextResponse.json({ success: true, posts });
    } catch (error) {
        console.error('[API/GETPOST]', error);
        return NextResponse.json({ success: false, message: 'Erro ao obter posts' }, { status: 401 });
    }
}
