import { createPortal } from "react-dom";

export const Modal = ({  onClose, children }) => {
    return createPortal(
        <>
            <div onClick={ onClose } 
            style={{ 
                backgroundColor: 'grey',
                position: 'absolute',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                opacity: 0.3,
                zIndex: 1
                }}>
            </div>
            <div style={{ 
                position: 'absolute', 
                top: '50vh', 
                left: '50vw', 
                transform: 'translate(-50%, -50%)',
                zIndex: 2
                }}>
                {children}
            </div>
        </>, document.getElementById('modal'));
};