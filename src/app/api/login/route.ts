import { NextRequest, NextResponse } from 'next/server';
import { login } from '@/libs/api/services/user';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const user = await login(body);
        return NextResponse.json({ success: true, user});
    } catch (error) {
        console.error('[API/LOGIN]', error);
        return NextResponse.json({ success: false, message: 'Login inválido' }, { status: 401 });
    }
}
