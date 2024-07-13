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
            <nav>
                <ul className="flex flex-row mr-[100px] mt-[10px] text-[35px]">
                    <li>
                        <Link href={links[0].href} className="navlink audioMenuMain">
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