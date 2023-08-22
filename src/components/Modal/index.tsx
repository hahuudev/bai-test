import ReactDOM from "react-dom";

interface ModalProps {
    children: React.ReactNode;
    isOpen: boolean;
}

function Modal({ children, isOpen = false }: ModalProps) {
    const bodyEl = document.querySelector("#react-modal-custom");

    if (!isOpen) return null;

    return ReactDOM.createPortal(<div className="react-modal">{children}</div>, bodyEl as Element | DocumentFragment);
}

export default Modal;
