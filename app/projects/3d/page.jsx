import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const ThreeD = () => {
    const projectsList = projects.threed;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># 3d</h1>
            </div>
        </>
    );
}

export default ThreeD;