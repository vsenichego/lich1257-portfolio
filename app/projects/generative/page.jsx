import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Generative = () => {
    const projectsList = projects.generative;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># generative</h1>
            </div>
        </>
    );
}

export default Generative;