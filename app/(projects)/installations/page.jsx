import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';
import Logo from '@/ui/navigation/Logo';

const Installations = () => {
    const projectsList = projects.installations;

    return (
        <>
            <Logo />
            <ProjectSlider projects={projectsList} />
            <div className="absolute bottom-3 left-10 text-[40px] uppercase">
                <h1>/installations</h1>
            </div>
        </>
    );
}

export default Installations;