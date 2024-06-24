'use client'
import { projectsList } from '@/lib/data.js';
import { useEffect } from 'react';
import { useState } from 'react';
import NavLinks from '@/ui/main/nav-links';

const Light = () => {
    let projects = projectsList
    useEffect(() => {
        console.log('About component mounted');
        console.log('list of projects:');
        console.log(projects);
        console.log(projects.img);
    }, []);

    const [selectedProjectIndex, setSelectedProjectIndex] = useState();

    const toggleDescription = (index) => {
        setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
    };

    return (
        <>
            <div className="w-screen h-screen flex">
                {/* <div className="ml-[30px] mt-[10px] absolute">
                    <NavLinks />
                </div> */}
                <ul className="flex w-full h-full">
                    {projects.map((project, index) => {
                        return (
                            <li
                                key={index}
                                className="w-full h-full max-w-[250px] max-h-[250px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black m-auto bg-cover bg-center bg-no-repeat]"
                                style={{
                                    backgroundImage: `url(${project.img})`,
                                    boxShadow: "5px 5px 5px rgba(0, 0, 255, .3)"
                                }}
                            >
                                <h2>{project.title}</h2>
                                <button onClick={() => toggleDescription(index)} className="relative z-10 p-2">
                                    {selectedProjectIndex === index ? '✕' : 'description'}
                                </button>
                                {selectedProjectIndex === index && (
                                    <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 p-4 rounded z-0">
                                        <p className="text-white mt-[40px] mb-10 w-1/2 text-[20px]">{project.textEn}</p>
                                        <p className="text-white w-1/2 text-[20px]">{project.textRu}</p>
                                    </div>
                                )}
                            </li>
                        )
                    })}
                </ul >
                <div className="uppercase absolute text-[40px] bottom-3 left-10">
                    <h1># light</h1>
                </div>
            </div >
        </>
    );
}

export default Light;