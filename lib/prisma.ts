import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function fetchSkills() {
    return prisma.skill.findMany();
}

export async function fetchProjects() {
    return prisma.project.findMany();
}

export default prisma;