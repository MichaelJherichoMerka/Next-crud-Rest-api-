import { deletePost, getById, updatePost } from "@/lib/data";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    const post = getById(id);
    if (!post) {
      return NextResponse.json({ message: "error" }, { status: 404 });
    }
    return NextResponse.json({ message: "ok", post }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};

export const PUT = async (req: Request) => {
  try {
    const { title, desc } = await req.json();
    const id = req.url.split("blogs/")[1];
    updatePost(id, title, desc);
    return NextResponse.json({ message: " ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
export const DELETE = async (req: Request) => {
  try {
    const id = req.url.split("blogs/")[1];
    deletePost(id);
    return NextResponse.json({ message: " ok" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
