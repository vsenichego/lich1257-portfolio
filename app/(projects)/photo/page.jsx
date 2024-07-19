import projects from '@/lib/dataProjects.json';
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "photo",
    description: "photo content",
}

const Photo = () => {
    const projectsList = projects.photos;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default Photo;