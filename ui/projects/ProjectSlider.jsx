'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ProjectCard from './ProjectCard';

const ProjectSlider = ({ projects }) => {  // в качестве пропса мне прилетает массив объектов по ключу из родительского объекта projects
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null); // Отслеживаю состояние текущей карточки проекта
    const [language, setLanguage] = useState('en'); // Отслеживаю состояние выбранного языка
    const swiperRef = useRef(null);  // Ссылаюсь на свайпер-контейнер для...

    const toggleDescription = (index) => {  // у ProjectCard есть одноименный пропс, в который я передаю эту функцию-обработчик для onClick
        setSelectedProjectIndex(index);     // выставляю через функцию хука useState значение переменной selectedProjectIndex, юзая 
    };

    const closeDescription = () => {
        setSelectedProjectIndex(null);
    };

    const toggleLanguage = () => {
        setLanguage((currentLanguage) => (currentLanguage === 'en' ? 'ru' : 'en'));  //или prevLanguage (прочитать про соглашения по неймингу в Реакте)
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeDescription();
            }
        };

        if (selectedProjectIndex !== null) {
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
    }, [selectedProjectIndex]);

    return (
        <>
            {selectedProjectIndex !== null && (
                <div className="absolute top-5 right-10 z-30">
                    <button onClick={toggleLanguage} className="bg-white text-black p-2 rounded">
                        {language === 'en' ? 'Switch to Ru' : 'Switch to En'}
                    </button>
                </div>
            )}
            <Swiper
                ref={swiperRef}
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
                speed={2000}
                loop={true}
                className="m-auto"
            >
                {projects.map((project, index) => (  //здесь projects это один из массивов light, threed, generative  и т.д., для каждого элемента массива я создаю Слайд (компонент из либы swiper.js)
                    <SwiperSlide key={index}>
                        <ProjectCard
                            project={project}
                            index={index}
                            selectedProjectIndex={selectedProjectIndex}
                            toggleDescription={toggleDescription}
                            language={language} // Передаю текущий язык через пропс в компонент ProjectCard
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            {selectedProjectIndex !== null && (
                <div className="fixed inset-0 z-20 bg-black bg-opacity-80 flex justify-center items-center">
                    <div className="bg-white p-10 rounded-lg w-4/5 h-4/5 overflow-auto relative">
                        <button
                            className="absolute top-5 right-5 text-black"
                            onClick={closeDescription}
                        >
                            ✕
                        </button>
                        <h2 className="text-black text-2xl mb-4">{projects[selectedProjectIndex].title}</h2>
                        <p className="text-black text-xl mb-4">
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
