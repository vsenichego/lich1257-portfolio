
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AudioMenu from '@/ui/navigation/AudioMenu';
import { randomTextAppearEffect } from '@/lib/randomTextAppearEffect'

export default function DropdownMenu({ linkName, links, isOpen, onToggle, targetBlank }) {
    const [categoryName, setCategoryName] = useState(Array(links.length).fill(""));

    useEffect(() => {
        if (isOpen) {
            const newCategoryName = Array(links.length).fill("");
            setCategoryName(newCategoryName);

            links.forEach((link, index) => {
                randomTextAppearEffect(link.name, (newLink) => {
                    setCategoryName((prevLink) => {
                        const updatedTexts = [...prevLink];
                        updatedTexts[index] = newLink;
                        return updatedTexts;
                    });
                }, 20);
            });
        }
    }, [isOpen, links]);

    return (
        <li className="ml-4">
            <button className="audioMenuMain hover:text-[#00ff00]" onClick={onToggle}>
                {linkName}
            </button>
            {isOpen && (
                <ul className="mt-1.5 text-lg lg:text-2xl xl:text-3xl absolute">
                    <AudioMenu />
                    {links.map((link, index) => (
                        <li key={link.key} className="px-1.5 border first:border-t-0 border-b-0 last:border-b border-white">
                            <Link
                                href={link.href}
                                target={targetBlank ? "_blank" : "_self"}
                                rel={targetBlank ? "noopener noreferrer" : ""}
                                className="audioMenuCat hover:text-[#00ff00] "
                            >
                                <h3>{categoryName[index]}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}