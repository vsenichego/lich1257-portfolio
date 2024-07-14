
import { useState, useEffect } from 'react';
import Link from 'next/link';
import AudioMenu from '@/ui/navigation/AudioMenu';
import { randomTextAppearEffect } from '@/lib/randomTextAppearEffect'

export default function DropdownMenu({ linkName, links, isOpen, onToggle, targetBlank }) {
    const [displayedTexts, setDisplayedTexts] = useState(Array(links.length).fill(""));

    useEffect(() => {
        if (isOpen) {
            const newDisplayedTexts = Array(links.length).fill("");
            setDisplayedTexts(newDisplayedTexts);

            links.forEach((link, index) => {
                randomTextAppearEffect(link.name, (newText) => {
                    setDisplayedTexts((prevTexts) => {
                        const updatedTexts = [...prevTexts];
                        updatedTexts[index] = newText;
                        return updatedTexts;
                    });
                }, 20);
            });
        }
    }, [isOpen, links]);

    return (
        <li className="ml-[30px]">
            <button className="audioMenuMain hover:text-[#00ff00]" onClick={onToggle}>
                {linkName}
            </button>
            {isOpen && (
                <ul className="text-[25px] absolute">
                    <AudioMenu />
                    {links.map((link, index) => (
                        <li key={link.key}>
                            <Link
                                href={link.href}
                                target={targetBlank ? "_blank" : "_self"}
                                rel={targetBlank ? "noopener noreferrer" : ""}
                                className="audioMenuCat hover:text-[#c037df]"
                            >
                                <h3>{displayedTexts[index]}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}