'use client'
import { projects } from '@/lib/data.js';
import { chaptersLinks } from '@/lib/dataLinks.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Collabs = () => {
    const projectsList = projects.collabs;
    let chapterName = chaptersLinks[4].name;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># {chapterName}</h1>
            </div>
        </>
    );
}

export default Collabs;