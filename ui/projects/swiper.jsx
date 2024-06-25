import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { projectsList } from '@/lib/data.js';
import { useState } from 'react';

// PART FOR INTERACTIVE CARDS OF PROJECTS
//
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { useLoader } from '@react-three/fiber';
// import * as THREE from 'three';

// const texture_1 = useLoader(TextureLoader, "/projects/oxxi.png")
// const texture_2 = useLoader(TextureLoader, "/projects/trst.png")
// const ThreeJSCustom = () => {
//     return (
//         <mesh>
//             <planeGeometry args={[3, 3, 16, 100]} />
//             <meshStandardMaterial map={texture} />
//         </mesh>
//     );
// }

const ProjectSlider = () => {
    let projects = projectsList

    const [selectedProjectIndex, setSelectedProjectIndex] = useState();

    const toggleDescription = (index) => {
        setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
    };

    return (
            <Swiper
                modules={[Autoplay]}
                spaceBetwe1en={150}
                slidesPerView="auto"
                className="w-screen h-screen flex"
                autoplay={{
                    delay: 1,
                    disableOnInteraction: false,
                    reverseDirection: true,
                    pauseOnMouseEnter: true, 
                }}
                speed={5000}
                loop={true}
            >
                {projects.map((project, index) => (
                    <SwiperSlide
                        key={index}
                        className="mr-[50px] w-full h-full max-w-[250px] max-h-[250px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black m-auto bg-cover bg-center bg-no-repeat]"
                        style={{
                            backgroundImage: `url(${project.img})`,
                            boxShadow: "5px 5px 5px rgba(0, 0, 255, .3)"
                        }}>
                        <h2>{project.title}</h2>
                        <button onClick={() => toggleDescription(index)} className="relative z-10">
                            {selectedProjectIndex === index ? '✕' : 'description AAAA'}
                        </button>
                        {selectedProjectIndex === index && (
                            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-0">
                                <p className="max-h-full text-white mt-[40px] mb-10 w-1/2 text-[20px]">{project.textEn}</p>
                                <p className="text-white w-1/2 text-[20px]">{project.textRu}</p>
                            </div>
                        )}
                        {/* <Canvas style={{ height: '500px' }}>
                            <ambientLight intensity={3} />
                            <directionalLight position={[0, 0, 5]} />
                            <ThreeJSCustom />
                            <OrbitControls />
                        </Canvas> */}
                    </SwiperSlide>
                ))}
            </Swiper>
    );
};

export default ProjectSlider;