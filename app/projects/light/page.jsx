import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Light = () => {
    const projectsList = projects.light;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># light</h1>
            </div>
        </>
    );
}

export default Light;