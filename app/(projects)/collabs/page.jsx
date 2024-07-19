import projects from '@/lib/dataProjects.json';
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "collabs",
    description: "collaboration projects",
}

const Collabs = () => {
    const projectsList = projects.collabs;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default Collabs;