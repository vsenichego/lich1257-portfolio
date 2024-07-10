import { useState } from 'react';
import Link from 'next/link';
import AudioMenu from '@/ui/navigation/AudioMenu';

export default function DropdownMenu({ linkName, links }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <li className="ml-[30px]">
            <button className=" navlink audioMenuMain" onClick={toggleDropdown}>
                {linkName}
            </button>
            {showDropdown && (
                <ul className="text-[25px] dropdown-content absolute">
                    <AudioMenu />
                    {links.map((link) => (
                        <li key={link.key} className="blink-caret">
                            <Link href={link.href} className="navlink audioMenuCat typing-animation">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}