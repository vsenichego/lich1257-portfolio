import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Photo = () => {
    const projectsList = projects.photos;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># photo</h1>
            </div>
        </>
    );
}

export default Photo;