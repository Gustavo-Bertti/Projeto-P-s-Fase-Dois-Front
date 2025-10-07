import { NextResponse } from "next/server";
import { getPostsByUserId } from "@/libs/api/services/post";

export async function GET(request: Request) {
  try {
    const posts = await getPostsByUserId();
    return NextResponse.json({ success: true, posts });
  } catch (error) {
    console.error("[API/GETBYUSERID]", error);
    return NextResponse.json({ success: false, message: "Erro ao obter posts do usuário" }, { status: 500 });
  }
}
