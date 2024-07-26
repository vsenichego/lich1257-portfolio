'use client'
import { usePathname } from 'next/navigation';
import Logo from '@/ui/navigation/Logo';
import { NavAbout, NavContact } from '@/ui/navigation/Navigation';

const Layout = ({ children }) => {
    const heading = usePathname().slice(1)

    return (
        <>
            <header className="absolute p-4 z-10">
                <nav className="relative w-full text-xl sm:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    <ul>
                        <Logo />
                        <NavAbout />
                        <NavContact />
                    </ul>
                </nav>
            </header>
            {children}
            <footer className="absolute bottom-3 left-10 text-[40px] uppercase z-10">
                <div className="flex flex-row items-center">
                    <span className="pr-1.5">/</span>
                    <h1>{heading}</h1>
                </div>
            </footer>
        </>
    );
}

export default Layout;