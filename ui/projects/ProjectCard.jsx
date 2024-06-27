'use client';

const ProjectCard = ({ project, index, selectedProjectIndex, toggleDescription, language }) => {
    return (
        <div
            className="project-card w-full h-full max-w-[250px] max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black bg-cover bg-center bg-no-repeat mx-4"
            style={{
                backgroundImage: `url(${project.img})`,
                boxShadow: "5px 5px 5px rgba(0, 0, 255, .3)"
            }}
        >
            <h2 className="text-white">{project.title}</h2>
            <button onClick={() => toggleDescription(index)} className="relative z-10">
                description
            </button>
            {selectedProjectIndex === index && (
                <div className="absolute inset-0 z-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-[20px] text-white">
                    <p className="w-1/2 max-h-full mt-[40px] mb-10">
                        {language === 'en' ? project.textEn : project.textRu}
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;