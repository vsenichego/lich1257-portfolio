'use client'
import { useState } from 'react';
import Link from 'next/link';
import { mainLinks, categoryLinks, contactLinks } from '@/lib/dataLinks';
import DropdownMenu from '@/ui/navigation/DropdownMenu';
import AudioMenu from '@/ui/navigation/AudioMenu';

export default function MainNavLinks() {
    const links = mainLinks;
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    return (
        <>
            <AudioMenu />
            <nav className="relative w-full text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
                <ul className="flex flex-row justify-center md:justify-start w-full mt-1.5 md:mt-3.5 py-1.5 md:first:pl-3.5 border-y border-white">
                    <li>
                        <Link href={links[0].href} className="audioMenuMain hover:text-[#00ff00]">
                            {links[0].name}
                        </Link>
                    </li>
                    {links.map((link) => {
                        if (link.name === 'contact') {
                            return (
                                <DropdownMenu
                                    key={link.key}
                                    linkName={link.name}
                                    links={contactLinks}
                                    isOpen={openDropdown === 'contact'}
                                    onToggle={() => handleToggle('contact')}
                                    targetBlank={true}
                                />
                            );
                        }
                        if (link.name === 'projects') {
                            return (
                                <DropdownMenu
                                    key={link.key}
                                    linkName={link.name}
                                    links={categoryLinks}
                                    isOpen={openDropdown === 'projects'}
                                    onToggle={() => handleToggle('projects')}
                                    targetBlank={false}
                                />
                            );
                        }
                        return null;
                    })}
                </ul>
            </nav>
        </>
    )
}