import { NextRequest, NextResponse } from 'next/server';
import { createUser } from '@/libs/api/services/user';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const user = await createUser(body);
        return NextResponse.json({ success: true, user });
    } catch (error) {
        console.error('[API/REGISTER]', error);
        return NextResponse.json({ success: false, message: 'Erro ao criar usuário' }, { status: 401 });
    }
}
