import projects from '@/lib/dataProjects.json'
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "generative",
    description: "generative projects",
}

const Generative = () => {
    const projectsList = projects.generative;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default Generative;