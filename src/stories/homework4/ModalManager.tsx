import React, { ReactNode, useState, ChangeEventHandler, useEffect} from "react";
import styles from './modal_manager.module.css'; 
import Modal from "../homework3/modal/Modal";
interface IModalManagerProps {
    initialText?: string;
}

const ModalManager: React.FC<IModalManagerProps> = ({initialText}) => {
    const isShowingModal:boolean = false;
    const [showModal, setShowModal] = useState(isShowingModal);
    const [inputText, setInputText] = useState(initialText);

    const handleOpenModalClick = () => {
       setShowModal(true);
    }
    const handleCloseModalClick = () => {
       setShowModal(false);
    }
    const handleChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputText(e.target.value)
    }
    
    return (
        <div className={styles.main}>
            <input type="text" value={inputText} onChange={handleChangeInput}></input>
            <button onClick={handleOpenModalClick}>Открыть</button>
            <Modal visible={showModal} onClose={handleCloseModalClick}>
                <div>{inputText}</div>
            </Modal>
        </div>
    )
}

export default ModalManager;