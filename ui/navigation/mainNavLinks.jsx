'use client'
import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import { mainLinks } from '@/lib/data';
import audioMenu from '@/lib/audioMenu';

export default function MainNavLinks() {
    const links = mainLinks;

    audioMenu()

    return (
        <>
            <audio id="beep" preload="auto" style={{ display: 'none' }}>
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