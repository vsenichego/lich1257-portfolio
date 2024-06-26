'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import ProjectCard from './ProjectCard';

const ProjectSlider = ({ projects }) => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

    const toggleDescription = (index) => {
        setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
    };

    return (
        <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={2000}
            loop={true}
            className="m-auto"
        >
            {projects.map((project, index) => (
                <SwiperSlide key={index}>
                    <ProjectCard
                        project={project}
                        index={index}
                        selectedProjectIndex={selectedProjectIndex}
                        toggleDescription={toggleDescription}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default ProjectSlider;