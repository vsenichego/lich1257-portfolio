// 'use client'
// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import ProjectCards from './ProjectCards';

// const ProjectSlider = ({ projects }) => {
//     const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

//     const toggleDescription = (index) => {
//         setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
//     };

//     return (
//         <Swiper
//             spaceBetween={50}
//             slidesPerView={3}
//             onSlideChange={() => setSelectedProjectIndex(null)}
//         >
//             {projects.map((project, index) => (
//                 <SwiperSlide key={index}>
//                     <ProjectCards
//                         project={project}
//                         index={index}
//                         selectedProjectIndex={selectedProjectIndex}
//                         toggleDescription={toggleDescription}
//                     />
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default ProjectSlider;


//FIRST VERSION
//
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import SwiperCore, { Autoplay } from 'swiper'
// import { Autoplay, MouseWheel } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { projectsList } from '@/lib/data.js';
// import { useState } from 'react';

// // PART FOR INTERACTIVE CARDS OF PROJECTS
// //
// // import { Canvas } from '@react-three/fiber';
// // import { OrbitControls } from '@react-three/drei';
// // import { useLoader } from '@react-three/fiber';
// // import * as THREE from 'three';

// // const texture_1 = useLoader(TextureLoader, "/projects/oxxi.png")
// // const texture_2 = useLoader(TextureLoader, "/projects/trst.png")
// // const ThreeJSCustom = () => {
// //     return (
// //         <mesh>
// //             <planeGeometry args={[3, 3, 16, 100]} />
// //             <meshStandardMaterial map={texture} />
// //         </mesh>
// //     );
// // }


// const ProjectSlider = () => {
//     let projects = projectsList

//     const [selectedProjectIndex, setSelectedProjectIndex] = useState();

//     const toggleDescription = (index) => {
//         setSelectedProjectIndex(selectedProjectIndex === index ? null : index);
//     };

//     return (
//         <Swiper
//             modules={[Autoplay, MouseWheel]}
//             mousewheel={{enabled: true}}
//             spaceBetween={40}
//             slidesPerView={3}
//             className="w-full h-full top-[15vh]"
//             autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true}}
//             speed={2000}
//             loop={true}
//         >
//             {projects.map((project, index) => (
//                 <SwiperSlide
//                     key={index}
//                     className="bg-cover bg-center bg-no-repeat"
//                     style={{
//                         backgroundImage: `url(${project.img})`,
//                         boxShadow: "5px 5px 5px rgba(0, 0, 255, .3)"
//                     }}>
//                     <h2>{project.title}</h2>
//                     <button onClick={() => toggleDescription(index)} className="relative z-10">
//                         {selectedProjectIndex === index ? '✕' : 'description'}
//                     </button>
//                     {selectedProjectIndex === index && (
//                         <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-0">
//                             <p className="max-h-full text-white mt-[40px] mb-10 w-1/2 text-[20px]">{project.textEn}</p>
//                             <p className="text-white w-1/2 text-[20px]">{project.textRu}</p>
//                         </div>
//                     )}
//                     {/* <Canvas style={{ height: '500px' }}>
//                             <ambientLight intensity={3} />
//                             <directionalLight position={[0, 0, 5]} />
//                             <ThreeJSCustom />
//                             <OrbitControls />
//                         </Canvas> */}
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default ProjectSlider;

// max-w-[250px] max-h-[250px] 2xl:max-w-[600px] 2xl:max-h-[600px] xl:max-w-[500px] xl:max-h-[500px] lg:max-w-[400px] lg:max-h-[400px] md:max-w-[300px] md:max-h-[300px] sm:max-w-[300px] sm:max-h-[300px]