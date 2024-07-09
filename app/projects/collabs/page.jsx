import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Collabs = () => {
    const projectsList = projects.collabs;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># collabs</h1>
            </div>
        </>
    );
}

export default Collabs;