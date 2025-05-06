import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const skills = await prisma.skill.findMany();
    return NextResponse.json(skills);
}

export async function POST(request: Request) {
    const { name } = await request.json();
    const skill = await prisma.skill.create({
        data: { name },
    });
    return NextResponse.json(skill);
}

export async function DELETE(request: Request) {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");
    await prisma.skill.delete({ where: { id } });
    return NextResponse.json({ message: "Skill deleted" });
}