import projects from '@/lib/dataProjects.json';
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "3d",
    description: "3d projects",
}

const ThreeD = () => {
    const projectsList = projects.threed;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default ThreeD;