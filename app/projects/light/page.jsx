'use client'
import { projects } from '@/lib/data.js';
import { chaptersLinks } from '@/lib/dataLinks.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';

const Light = () => {
    const projectsList = projects.light;
    let chapterName = chaptersLinks[0].name;

    return (
        <>
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1># {chapterName}</h1>
            </div>
        </>
    );
}

export default Light;


// DEBUG
// ProjectCard Component: Handles the display and toggling of individual project details.
// ProjectSlider Component: Manages the list of projects and their states.
// Light Component: Uses ProjectSlider to display the projects.

// import { useEffect } from 'react';
// useEffect(() => {
//     console.log('About component mounted');
//     console.log(projectsList);
//     console.log(chapterName);
// }, []);


// VERSION WITH VANILLA JS
//
// 'use client'
// import { useEffect, useState, useRef } from 'react';
// import { projectsList } from '@/lib/data.js';
// // import NavLinks from '@/ui/navigation/mainNavLinks';

// const Light = () => {
//     let projects = projectsList

//     const [selectedProjectIndex, setSelectedProjectIndex] = useState();
//     const sliderRef = useRef();

//     useEffect(() => {
//         const slider = sliderRef.current;
//         let interval;

//         const startSlider = () => {
//             interval = setInterval(() => {
//                 if (slider.scrollWidth - slider.clientWidth === slider.scrollLeft) {
//                     slider.scrollTo({ left: 0, behavior: 'smooth' });
//                 } else {
//                     slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
//                 }
//             }, 3000); // Adjust the delay as needed
//         };

//         const stopSlider = () => clearInterval(interval);

//         slider.addEventListener('mouseover', stopSlider);
//         slider.addEventListener('mouseout', startSlider);

//         startSlider();

//         console.log('About component mounted');
//         console.log(projects.img);

//         return () => {
//             stopSlider();
//             slider.removeEventListener('mouseover', stopSlider);
//             slider.removeEventListener('mouseout', startSlider);
//         };
//     }, []);


//     const toggleDescription = (index) => {
//         setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
//     };

//     return (
//         <>
//             <div className="w-screen h-screen flex">
//                 {/* <div className="ml-[30px] mt-[10px] absolute">
//                     <NavLinks />
//                 </div> */}
//                 <ul ref={sliderRef} className="flex w-full h-full overflow-x-hidden whitespace-nowrap">
//                     {projects.map((project, index) => {
//                         return (
//                             <li
//                                 key={index}
//                                 className="flex-none m-auto mx-5 w-[250px] h-[400px] 2xl:w-[700px] 2xl:h-[700px] xl:w-[600px] xl:h-[600px] lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] bg-black bg-cover bg-center bg-no-repeat bg-[image:var(--image-url)]"
//                                 style={{
//                                     '--image-url': `url(${project.img})`,
//                                     // backgroundImage: `url(${project.img})`,
//                                     boxShadow: "5px 5px 5px rgba(0, 0, 255, .3)"
//                                 }}
//                             >
//                                 <h2>{project.title}</h2>
//                                 <button onClick={() => toggleDescription(index)} className="relative z-10">
//                                     {selectedProjectIndex === index ? '✕' : 'description'}
//                                 </button>
//                                 {selectedProjectIndex === index && (
//                                     <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 z-0">
//                                         <p className="mb-5 w-1/2 text-[20px]">{project.textEn}</p>
//                                         <p className="w-1/2 text-[20px]">{project.textRu}</p>
//                                     </div>
//                                 )}
//                             </li>
//                         )
//                     })}
//                 </ul >
//                 <div className="uppercase absolute text-[40px] bottom-3 left-10">
//                     <h1># light</h1>
//                 </div>
//             </div >
//         </>
//     );
// }

// export default Light