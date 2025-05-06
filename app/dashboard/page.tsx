import { DashboardForm } from "@/components/DashboardForm";
import { fetchSkills, fetchProjects } from "@/lib/prisma";

export default async function Dashboard() {
    const skills = await fetchSkills();
    const projects = await fetchProjects();

    return (
        <div className="py-16 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <DashboardForm skills={skills} projects={projects} />
        </div>
    );
}