export default function MediaViewer({ type, src, onClick }) {
    switch (type) {
        case 'video':
            return (
                <video controls className="w-full h-full" onClick={onClick}>
                    <source src={src} type="video/mp4" />
                </video>
            );
        case 'youtube':
            return (
                <iframe
                    className="w-full h-full"
                    src={src}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="YouTube video"
                    onClick={onClick}
                    style={{width:"100%", height:"800"}}
                ></iframe>
            );
        case 'image':
        default:
            return (
                <img
                    src={src}
                    alt="Media Content"
                    className=""
                    onClick={onClick}
                />
            );
    }
};