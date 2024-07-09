export default function ProjectCard({ project, index, openGallery }) {
    return (
        <div
            className="project-card w-full h-full max-w-[250px] max-h-[400px] 2xl:max-w-[700px] 2xl:max-h-[700px] xl:max-w-[600px] xl:max-h-[600px] lg:max-w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[400px] sm:max-w-[300px] sm:max-h-[300px] bg-black bg-cover bg-center bg-no-repeat cursor-pointer"
            style={{
                backgroundImage: `url(${project.img})`,
            }}
            onClick={() => openGallery(index)}
        >
            <h2 className="">{project.title}</h2>
        </div>
    );
};