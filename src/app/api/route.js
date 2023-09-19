import { NextResponse } from "next/server";

/**
 * GET method for app router.
 * @returns {Promise<NextResponse>} Promise object representing the response.
 */
export async function GET(){
    const data = { text: 'Hello! (via app router)' }
    return NextResponse.json(data);
}