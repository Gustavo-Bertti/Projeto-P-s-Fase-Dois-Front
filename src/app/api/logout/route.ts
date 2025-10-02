import { NextResponse } from 'next/server';
import { clearToken } from '@/utils/auth';

export async function GET() {
    try {
        const res = await clearToken();
        return NextResponse.json({ success: true, res });
    } catch (error) {
        console.error('[API/LOGOUT]', error);
        return NextResponse.json({ success: false, message: 'Não foi possivel sair' }, { status: 401 });
    }
}
