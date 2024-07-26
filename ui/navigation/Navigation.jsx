'use client'
import { useState } from 'react';
import Link from 'next/link';
import links from '@/lib/dataLinks.json';

import DropdownMenu from '@/ui/navigation/DropdownMenu';

const NavAbout = () => {
    return (
        <>
            <li>
                <Link href="/about" className="audioMenuMain hover:text-[#00ff00]">
                    about
                </Link>
            </li>
        </>
    );
}

const NavContact = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    return (
        <>
            <DropdownMenu
                linkName="contact"
                links={links.contactLinks}
                isOpen={openDropdown === 'contact'}
                onToggle={() => handleToggle('contact')}
                targetBlank={true}
            />
        </>
    )

}

const NavCategory = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    return (
        <>
            <DropdownMenu
                linkName="projects"
                links={links.categoryLinks}
                isOpen={openDropdown === 'projects'}
                onToggle={() => handleToggle('projects')}
                targetBlank={false}
            />
        </>
    )
}

export {
    NavAbout, NavContact, NavCategory
}