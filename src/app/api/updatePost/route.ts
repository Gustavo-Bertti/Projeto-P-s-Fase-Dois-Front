import { NextResponse } from "next/server";
import { updatePost } from "@/libs/api/services/post";


export async function PUT(request: Request) {
    try {
        const postData = await request.json();
        if (!postData.id) throw new Error("ID do post é obrigatório");

        const updatedPost = await updatePost(postData);
        return NextResponse.json({ success: true, post: updatedPost });
    } catch (error) {
        console.error('[API/UPDATEPOST]', error);
        return NextResponse.json(
            { success: false, message: 'Erro ao atualizar post' },
            { status: 500 }
        );
    }
}
