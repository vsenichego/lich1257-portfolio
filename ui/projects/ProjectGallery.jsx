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
        <div className="fixed inset-0 z-30 flex">
            <div className="relative w-1/3  p-4 flex flex-col bg-black border">
                <button
                    className="absolute top-2 right-2 text-white p-2 rounded border"
                    onClick={toggleLanguage}
                >
                    {language === 'en' ? 'ru' : 'en'}
                </button>
                <h2 className="text-white text-4xl mb-4 mt-4">{project.title}</h2>
                <p className="text-white text-2xl mb-4 overflow-y-auto">
                    {language === 'en' ? project.textEn : project.textRu}
                </p>
            </div>
            <div className="relative w-2/3 bg-black p-4 overflow-y-auto border">
                <button
                    className="absolute top-2 right-2 text-white text-2xl rounded border"
                    onClick={closeGallery}
                >
                    ✕
                </button>
                <div className="grid grid-cols-2 gap-4 h-full p-4 border">
                    {project.media.map((mediaItem, index) => (
                        <div
                            key={index}
                            className="w-full cursor-pointer border"
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
