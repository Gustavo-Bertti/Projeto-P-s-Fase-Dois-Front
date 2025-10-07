import { NextResponse } from "next/server";
import { deletePost } from "@/libs/api/services/post";

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();
    await deletePost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[API/DELETEPOST]", error);
    return NextResponse.json(
      { success: false, message: "Erro ao excluir post" },
      { status: 500 }
    );
  }
}
