'use client'

import { projectsList } from '@/lib/data.js';
import { useEffect } from 'react';
import ProjectSlider from '@/ui/projects/swiper';
// import NavLinks from '@/ui/main/nav-links';


const Light = () => {
    const projects = projectsList;

    useEffect(() => {
        console.log('About component mounted');
        console.log('list of projects:');
        console.log(projects);
    }, []);

    return (
        <>
            {/* <div className="ml-[30px] mt-[10px] absolute">
                <NavLinks />
            </div> */}
            <ProjectSlider />
            <div className="uppercase absolute text-[40px] bottom-3 left-10">
                <h1># light</h1>
            </div>
        </>
    );
}

export default Light