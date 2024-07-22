'use client'
import Logo from '@/ui/navigation/Logo';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
    const heading = usePathname().slice(1)

    return (
        <>
            <header className="absolute p-4 z-10">
                <Logo />
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