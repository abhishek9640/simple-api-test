import { NextResponse } from 'next/server';

export async function GET() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke',
         { next: { revalidate: 10 } }
    );
    const data = await response.json();
    return NextResponse.json(data);
}