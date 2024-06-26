'use client'

const ProjectCard = ({ project, index, selectedProjectIndex, toggleDescription }) => {
    return (
        <div
            className="project-card"
            style={{
                backgroundImage: `url(${project.img})`,
            }}
        >
            <h2>{project.title}</h2>
            <button onClick={() => toggleDescription(index)} className="relative z-10">
                {selectedProjectIndex === index ? '✕' : 'description'}
            </button>
            {selectedProjectIndex === index && (
                <div className="absolute inset-0 z-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-[20px] text-white">
                    <p className="w-1/2 max-h-full mt-[40px] mb-10">{project.textEn}</p>
                    <p className="w-1/2">{project.textRu}</p>
                </div>
            )}
        </div>
    );
};
export default ProjectCard;

