import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("request", request);
  return NextResponse.json({ message: "Hi, GET Chatter!" });
}

export async function POST(request: Request) {
  console.log("request", request);
  return NextResponse.json({ message: "Hi, POST Chatter!" });
}
