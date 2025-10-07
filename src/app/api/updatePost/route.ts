import { NextResponse } from "next/server";
import { updatePost } from "@/libs/api/services/post";

export async function PUT(request: Request) {
    try {
        const postData = await request.json();
        const updatedPost = await updatePost(postData);
        return NextResponse.json({ success: true, post: updatedPost });
    } catch (error) {
        console.error('[API/UPDATEPOST]', error);
        return NextResponse.json({ success: false, message: 'Erro ao atualizar post' }, { status: 401 });
    }
}