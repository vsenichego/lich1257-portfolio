'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ProjectCard from './ProjectCard';
import ProjectGallery from './ProjectGallery';

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeDescription();
                closeGallery();
            }
        };

        if (selectedProjectIndex !== null || isGalleryOpen) {
            document.addEventListener('keydown', handleKeyDown);
        } else {
            document.removeEventListener('keydown', handleKeyDown);
        }

        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            if (selectedProjectIndex !== null) {
                swiperInstance.autoplay.stop();
            } else {
                swiperInstance.autoplay.start();
            }
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [selectedProjectIndex, isGalleryOpen]);

    return (
        <>
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, Mousewheel, FreeMode]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 0, disableOnInteraction: true, pauseOnMouseEnter: true }}
                speed={5000}
                loop={true}
                mousewheel={{ enabled: true, sensitivity: 1.75 }}
                freeMode={{ enabled: true, minimumVelocity: 0.02, momentum: false, momentumBounce: false, momentumRatio: 0.75, sticky: true }}
                className="m-auto"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className='border'>
                        <ProjectCard
                            project={project}
                            index={index}
                            selectedProjectIndex={selectedProjectIndex}
                            openGallery={openGallery}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
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