import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';
import Logo from '@/ui/navigation/Logo';

const Generative = () => {
    const projectsList = projects.generative;

    return (
        <>
            <header className="absolute p-4 z-10">
                <Logo />
            </header>
            <main className="relative w-full m-auto">
                <ProjectSlider projects={projectsList} />
            </main>
            <footer className="absolute bottom-3 left-10 text-[40px] uppercase z-10">
                <h1># generative</h1>
            </footer>
        </>
    );
}

export default Generative;