import projects from '@/lib/dataProjects.json';
import ProjectSlider from '@/ui/projects/ProjectSlider';

export const metadata = {
    title: "art pieces",
    description: "art content",
}

const ArtPieces = () => {
    const projectsList = projects.artPieces;

    return (
        <main className="relative w-full m-auto">
            <ProjectSlider projects={projectsList} />
        </main>
    );
}

export default ArtPieces;