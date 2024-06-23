'use client'
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import audioMenu from '@/utils/audioMenu'; // Adjust the path as needed


// Map of links to display in the main navigation.
const links = [
    { name: 'projects', href: '/projects', key: 1 },
    { name: 'contact', href: '/contact', key: 2 },
    { name: 'about', href: '/about', key: 3 },
];

export default function NavLinks() {
    audioMenu()

    return (
        <>
            <audio id="beep" controls preload="auto" style={{ display: 'none' }}>
                <source src="/audio/menu1.wav" />
            </audio>
            <ul className="flex flex-col text-[35px] main-nav">
                {links.map((link) => {
                    return (
                        <li className="mr-[100px] last:mb-[75px] pb-[5px] last:pb-0 hover:text-[#00FF00]" key={link.key}>
                            <Link
                                href={link.href}
                                className="navlink"
                            >
                                <p className="">{link.name}</p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}