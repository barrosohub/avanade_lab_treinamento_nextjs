import { NextResponse } from "next/server";

export async function GET(){
    const data = { text: 'Hello! (via app router)' }
    return NextResponse.json(data);
}