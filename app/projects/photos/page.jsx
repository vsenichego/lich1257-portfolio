'use client'
import { projects } from '@/lib/data.js';
import { chaptersLinks } from '@/lib/dataLinks.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Photos = () => {
    const projectsList = projects.photos;
    let chapterName = chaptersLinks[3].name;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># {chapterName}</h1>
            </div>
        </>
    );
}

export default Photos;