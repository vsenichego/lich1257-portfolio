import { projects } from '@/lib/data.js';
import ProjectSlider from '@/ui/projects/ProjectSlider';
import Logo from '@/ui/navigation/Logo';

const Collabs = () => {
    const projectsList = projects.collabs;

    return (
        <>
            <header className="absolute text-[40px] p-4 z-10">
                <Logo />
            </header>
            <main className="relative w-full m-auto">
                <ProjectSlider projects={projectsList} />
            </main>
            <footer className="absolute bottom-3 left-10 text-[40px] uppercase z-10">
                <div className="flex flex-row items-center">
                    <span className="pr-1.5">/</span>
                    <h1>collaborations</h1>
                </div>
            </footer>
        </>
    );
}

export default Collabs;