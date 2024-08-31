import projects from '@/lib/dataProjects.json';
import ProjectSlider from '@/ui/projects/ProjectSlider';
import Layout from '@/app/(projects)/layout';

export const metadata = {
    title: "3d",
    description: "3d projects",
}

const ThreeD = () => {
    const projectsList = projects.threed;
    const heading = metadata.title

    return (
        <Layout pageHeading={heading}>
            <main className="relative w-full m-auto">
                <ProjectSlider projects={projectsList} />
            </main>
        </Layout>
    );
}

export default ThreeD;