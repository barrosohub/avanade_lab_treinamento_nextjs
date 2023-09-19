import { NextResponse } from "next/server";

/**
 * GET method for retrieving user data.
 * @returns {Promise<NextResponse>} Returns a Promise that resolves to a NextResponse object with JSON data.
 */
export async function GET(){
    const data = { text: 'My users! (via app router)' }
    return NextResponse.json(data);
}