import MediaViewer from './MediaViewer';

export default function MediaModal({ src, type, onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 flex justify-center items-center bg-black/95"
            onClick={onClose}
        >
            <div className="w-3/4 h-fit border">
                <MediaViewer type={type} src={src} onClick={onClose} />
            </div>
        </div>
    );
};