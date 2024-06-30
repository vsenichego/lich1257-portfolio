import React, { useState } from 'react';
import MediaModal from './MediaModal';
import MediaViewer from './MediaViewer';

const ProjectGallery = ({ project, closeGallery, language, toggleLanguage }) => {
    const [selectedMedia, setSelectedMedia] = useState({ src: null, type: null });

    const handleMediaClick = (src, type) => {
        setSelectedMedia({ src, type });
    };

    const handleCloseModal = () => {
        setSelectedMedia({ src: null, type: null });
    };

    return (
        <div className="fixed inset-0 z-30 bg-black bg-opacity-75 flex">
            <div className="relative w-1/3 bg-black p-4 flex flex-col">
                <button
                    className="absolute top-2 left-2 bg-white text-black p-2 rounded"
                    onClick={toggleLanguage}
                >
                    {language === 'en' ? 'Ru' : 'En'}
                </button>
                <div className="mt-10 p-4 flex-grow overflow-">
                    <h2 className="text-white text-2xl mb-4">{project.title}</h2>
                    <p className="text-white text-xl mb-4">
                        {language === 'en' ? project.textEn : project.textRu}
                    </p>
                </div>
            </div>
            <div className="relative w-2/3 bg-black p-4 overflow-auto">
                <button
                    className="absolute top-2 right-2 text-white text-2xl"
                    onClick={closeGallery}
                >
                    ✕
                </button>
                <div className="grid grid-cols-2 gap-4 p-4">
                    {project.media.map((mediaItem, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer"
                            onClick={() => handleMediaClick(mediaItem.src, mediaItem.type)}
                        >
                            <MediaViewer type={mediaItem.type} src={mediaItem.src} />
                        </div>
                    ))}
                </div>
            </div>
            {selectedMedia.src && (
                <MediaModal src={selectedMedia.src} type={selectedMedia.type} onClose={handleCloseModal} />
            )}
        </div>
    );
};
export default ProjectGallery;
