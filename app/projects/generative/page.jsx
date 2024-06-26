'use client'
import { projects, chaptersLinks } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Generative = () => {
    const projectsList = projects.generative;
    let chapterName = chaptersLinks[1].name;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># {chapterName}</h1>
            </div>
        </>
    );
}

export default Generative;