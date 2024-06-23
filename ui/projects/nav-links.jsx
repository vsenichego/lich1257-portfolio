'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import audioMenu from '@/utils/audioMenu'; // Adjust the path as needed

// Map of links to display in the projects navigation.
const links = [
    { name: 'light', href: '/light', icon: '#', key: '', src: '/preview/1.jpg' },
    { name: 'generative_visuals', href: '/generative', icon: '#', key: '', src: '/preview/2.jpg' },
    { name: '3d_visuals', href: '/3d', icon: '#', key: '', src: '/preview/3.jpg' },
    { name: 'photos', href: '/photos', icon: '#', key: '', src: '/preview/4.jpg' },
    { name: 'collaborations', href: '/collabs', icon: '#', key: '', src: '/preview/5.jpg' },
];

export default function NavLinks() {
    // const pathname = usePathname();
    const [currentImage, setCurrentImage] = useState('/preview/test.jpg');
    audioMenu()

    return (
        <>
            <audio id="beep" controls preload="auto" style={{ display: 'none' }}>
                <source src="/audio/menu2.wav" />
            </audio>
            <ul className="text-[35px] my-auto ml-[78px]" >
                {links.map((link) => {
                    const linkIcon = link.icon;
                    return (

                        <li className="hover:text-[#8360f8]">
                            <Link
                                key={link.src}
                                href={link.href}
                                className="cursor-pointer hover:text-blue-500"
                                onPointerEnter={() => setCurrentImage(link.src)}
                                onPointerLeave={() => setCurrentImage('/preview/test.jpg')}
                            >
                                <div className='flex'>
                                    <span>{linkIcon}&nbsp;</span>
                                    <p className="">{link.name}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <div className="my-auto">
                <Image
                    src={currentImage}
                    width={500}
                    height={500}
                    className="w-[511px] h-[503px] mr-[78px]"
                    alt="section logo"
                />
            </div>
        </>
    )
}