'use client'
import { useState } from 'react';
import Link from 'next/link';
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

const NavContact = ({ contacts }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    const contactLinks = contacts.map(contact => ({
        key: contact.id,
        name: contact.attributes.contactTitle,
        href: contact.attributes.contactUrl,
    }));

    return (
        <>
            <DropdownMenu
                linkName="contact"
                links={contactLinks}
                isOpen={openDropdown === 'contact'}
                onToggle={() => handleToggle('contact')}
                targetBlank={true}
            />
        </>
    )

}

const NavCategory = ({ categories }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleToggle = (menu) => {
        setOpenDropdown((prev) => (prev === menu ? null : menu));
    };

    const categoryLinks = categories.map(category => ({
        key: category.id,
        name: category.attributes.categoryName,
        href: category.attributes.categoryUrl,
    }));

    return (
        <>
            <DropdownMenu
                linkName="projects"
                links={categoryLinks}
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