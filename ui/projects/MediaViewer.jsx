import React from 'react';

const MediaViewer = ({ type, src, onClick }) => {
    switch (type) {
        case 'video':
            return (
                <video controls className="w-full h-auto" onClick={onClick}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            );
        case 'youtube':
            return (
                <iframe
                    className="w-full h-full"
                    src={src}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                    onClick={onClick}
                ></iframe>
            );
        case 'image':
        default:
            return (
                <img
                    src={src}
                    alt="Media Content"
                    className="w-full h-auto object-contain"
                    onClick={onClick}
                />
            );
    }
};

export default MediaViewer;