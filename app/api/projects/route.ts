import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const projects = await prisma.project.findMany();
    return NextResponse.json(projects);
}

export async function POST(request: Request) {
    const { title, description, tech, github } = await request.json();
    const project = await prisma.project.create({
        data: { title, description, tech, github },
    });
    return NextResponse.json(project);
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: "Project deleted" });
}