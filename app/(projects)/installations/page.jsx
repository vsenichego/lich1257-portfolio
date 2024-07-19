import projects from '@/lib/dataProjects.json'
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "installations",
    description: "installations projects",
}

const Installations = () => {
    const projectsList = projects.installations;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default Installations;