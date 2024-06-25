'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
// import { usePathname } from 'next/navigation';
// import clsx from 'clsx';
import audioMenu from '@/lib/audioMenu'; // Adjust the path as needed
import { chaptersLinks } from '@/lib/data';


export default function ChapterNavLinks() {
    // const pathname = usePathname();
    const [currentImage, setCurrentImage] = useState('/preview/test.jpg');
    const links = chaptersLinks;

    audioMenu()

    return (
        <>
            <audio id="beep" preload="auto" style={{ display: 'none' }}>
                <source src="/audio/menu2.wav" />
            </audio>
            <ul className="text-[48px] my-auto ml-[70px] mr-[30px]">
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
                    className="w-[550px] h-[550px] mr-[65px]"
                    alt="section logo"
                />
            </div>
        </>
    )
}