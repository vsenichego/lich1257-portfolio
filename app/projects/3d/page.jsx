'use client'
import { projects, chaptersLinks } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const ThreeD = () => {
    const projectsList = projects.threed;
    let chapterName = chaptersLinks[2].name;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># {chapterName}</h1>
            </div>
        </>
    );
}

export default ThreeD;