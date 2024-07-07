'use client'
import Link from 'next/link';
import { mainLinks, chaptersLinks, contactLinks } from '@/lib/dataLinks';
import DropdownMenu from '@/ui/navigation/DropdownMenu';
import AudioMenu from '@/ui/navigation/AudioMenu';

export default function MainNavLinks() {
    const links = mainLinks;

    return (
        <>
            <AudioMenu />
            <nav>
                <ul className="flex flex-row mr-[100px] mt-[10px] text-[35px]">
                    <li className="" key={links[0].key}>
                        <Link href={links[0].href} className="navlink">
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
                                />
                            );
                        }
                        if (link.name === 'projects') {
                            return (
                                <DropdownMenu
                                    key={link.key}
                                    linkName={link.name}
                                    links={chaptersLinks}
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