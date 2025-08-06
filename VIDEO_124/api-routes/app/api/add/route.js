import { NextResponse } from "next/server";

export async function POST(request) {
    let data = request.json()
    console.log(data);
    
    return NextResponse.json({success:true, data:"yes"})
}