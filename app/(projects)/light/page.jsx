import projects from '@/lib/dataProjects.json'
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "light",
    description: "light engineering projects",
}

const Light = () => {
    const projectsList = projects.light;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default Light;