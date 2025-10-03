import { getPostBySearch } from '@/libs/api/services/post';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    try {
        const headers = new Headers(request.headers);
        const termo = headers.get('termo') || '';
        const posts = await getPostBySearch(termo);
        return NextResponse.json({ success: true, posts });
    } catch (error) {
        console.error('[API/SEARCHPOST]', error);
        return NextResponse.json({ success: false, message: 'Erro ao buscar posts' }, { status: 404 });
    }
}