'use client';
import { useState, useRef } from 'react';
import useSwiperUtils from '@/lib/useSwiperUtils';
import ProjectGallery from './ProjectGallery';
import '@/styles/slider.css';


const ProjectSlider = ({ projects }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [language, setLanguage] = useState('en');
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    const swiperRef = useRef(null);

    const openGallery = (index) => {
        setIsGalleryOpen(true);
        setSelectedProjectIndex(index);
    };

    const closeGallery = () => {
        setIsGalleryOpen(false);
        setSelectedProjectIndex(null);
    };

    const toggleLanguage = () => {
        setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'ru' : 'en'));
    };

    useSwiperUtils(swiperRef, selectedProjectIndex, isGalleryOpen, closeGallery)

    return (
        <>
            <swiper-container ref={swiperRef} init="false" class="swiper-container">
                {projects.map((project, index) => (
                    <swiper-slide key={index} class="swiper-slide">
                        <div
                            className="project-card relative w-[600px] h-[600px] max-w-[250px] max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-cover bg-center bg-no-repeat cursor-pointer group"
                            style={{
                                backgroundImage: `url(${project.img})`,
                            }}
                            onClick={() => openGallery(index)}
                        >
                            <h2 className="absolute top-2 left-2 h-fit bg-black bg-opacity-40 p-2 rounded z-10">{project.title}</h2>
                            <div className="absolute inset-0 w-inherit h-inherit bg-white opacity-0 group-hover:opacity-35 transition duration-500 ease-in-out"></div>
                        </div>
                    </swiper-slide>
                ))}
            </swiper-container>
            {isGalleryOpen && selectedProjectIndex !== null && (
                <ProjectGallery
                    project={projects[selectedProjectIndex]}
                    closeGallery={closeGallery}
                    language={language}
                    toggleLanguage={toggleLanguage}
                />
            )}
        </>
    );
};

export default ProjectSlider;