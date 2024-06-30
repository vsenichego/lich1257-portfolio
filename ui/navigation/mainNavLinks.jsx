'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { mainLinks } from '@/lib/dataLinks';
import audioMenu from '@/lib/audioMenu';
import ContactsModal from '@/ui/navigation/ContactsModal';

export default function MainNavLinks() {
    const links = mainLinks;
    const [showModal, setShowModal] = useState(false);

    audioMenu()

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <audio id="beep" preload="auto" style={{ display: 'none' }}>
                <source src="/audio/menu1.wav" />
            </audio>
            <ul className="flex flex-col text-[35px] main-nav">
                {links.map((link) => {
                    return (
                        <li className="mr-[100px] last:mb-[75px] pb-[5px] last:pb-0 hover:text-[#00FF00]" key={link.key}>
                            {link.name === 'contact' ? (
                                <Link className="navlink" onClick={openModal} href="">
                                    <p>{link.name}</p>
                                </Link>
                            ) : (
                                <Link href={link.href} className="navlink">
                                    <p>{link.name}</p>
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ul>
            {showModal && <ContactsModal onClose={closeModal} />}
        </>
    )
}