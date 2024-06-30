'use client';

const ProjectCard = ({ project, index, toggleDescription, openGallery }) => {
    return (
        <div
            className="project-card w-full h-full max-w-[250px] max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black bg-cover bg-center bg-no-repeat mx-4 cursor-pointer"
            style={{
                backgroundImage: `url(${project.img})`,
            }}
            onClick={() => openGallery(index)}  // Open gallery on click
        >
            <h2 className="text-white">{project.title}</h2>
        </div>
    );
};

export default ProjectCard;



// 'use client';

// const ProjectCard = ({ project, index, toggleDescription }) => {
//     return (
//         <div
//             className="project-card w-full h-full max-w-[250px] max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black bg-cover bg-center bg-no-repeat mx-4"
//             style={{
//                 backgroundImage: `url(${project.img})`,
//                 // boxShadow: "5px 5px 5px 5px  rgba(207, 207, 207, 0.822)"
//             }}
//         >
//             <h2 className="text-white">{project.title}</h2>
//             <button onClick={() => toggleDescription(index)} className="relative z-10">
//                 description
//             </button>
//         </div>
//     );
// };

// export default ProjectCard;