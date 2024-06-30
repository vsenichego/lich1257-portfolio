// components/ContactModal.js

import { contactLinks } from '@/lib/dataLinks'

const ContactsModal = ({ onClose }) => {
    const links = contactLinks;


    return (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-black text-white p-8 rounded-[25px] modal-content relative w-3/4 max-w-3xl">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">contact me</h2>
                    <button onClick={onClose} className="text-white text-xl font-bold">
                        &times;
                    </button>
                </div>
                <ul className="space-y-4">

                    {links.map((link) => {
                        return (
                            <li className="hover:text-[#00FF00]">
                                <a target="_blank" href={link.href}>{link.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    );
};

export default ContactsModal;



