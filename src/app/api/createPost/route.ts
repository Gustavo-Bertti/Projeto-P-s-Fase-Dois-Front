import { NextResponse } from "next/server";
import { createPost } from "@/libs/api/services/post";

export async function POST(request: Request) {
    try {
        const postData = await request.json();
        const newPost = await createPost(postData);
        return NextResponse.json({ success: true, post: newPost });
    } catch (error) {
        console.error('[API/CREATEPOST]', error);
        return NextResponse.json({ success: false, message: 'Erro ao criar post' }, { status: 401 });
    }
}