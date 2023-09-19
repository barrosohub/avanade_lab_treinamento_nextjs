import { NextResponse } from "next/server";

export async function GET(){
    const data = { text: 'My users! (via app router)' }
    return NextResponse.json(data);
}