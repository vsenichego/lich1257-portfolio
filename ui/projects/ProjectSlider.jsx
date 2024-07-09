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
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={5000}
                loop={true}
                mousewheel={{ enabled: true, sensitivity: 0.75 }}
                freeMode={{ enabled: true, momentum: true, momentumBounce: false, momentumRatio: 0.75, sticky: true}}
                className="m-auto"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index}>
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
            {selectedProjectIndex !== null && !isGalleryOpen && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-40 flex justify-center items-center">
                    <div className="bg-black bg-opacity-75 p-10 rounded-lg w-full h-full overflow-auto relative">

                        <h2 className="text-white text-2xl mb-4">{projects[selectedProjectIndex].title}</h2>
                        <p className="text-white text-xl mb-4">
                            {language === 'en'
                                ? projects[selectedProjectIndex].textEn
                                : projects[selectedProjectIndex].textRu}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectSlider;