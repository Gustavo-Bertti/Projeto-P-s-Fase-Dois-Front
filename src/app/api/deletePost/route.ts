import { NextResponse } from "next/server";
import{ deletePost } from "@/libs/api/services/post";

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        if (!id) {
            return NextResponse.json({ success: false, message: 'ID do post não fornecido' }, { status: 400 });
        }
        await deletePost(Number(id));
        return NextResponse.json({ success: true, message: 'Post deletado com sucesso' });
    } catch (error) {
        console.error('[API/DELETEPOST]', error);
        return NextResponse.json({ success: false, message: 'Erro ao deletar post' }, { status: 401 });
    }
}