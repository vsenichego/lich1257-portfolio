import MediaViewer from './MediaViewer';

export default function MediaModal({ src, type, onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex justify-center items-center"
            onClick={onClose}
        >
            <div className="relative w-4/5 h-4/5 flex justify-center items-center">
                <MediaViewer type={type} src={src} onClick={onClose} />
            </div>
        </div>
    );
};