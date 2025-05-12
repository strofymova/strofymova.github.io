import React, { ReactNode, useState } from "react";
import clsx from "clsx";
import styles from './modal_manager.module.css'; 

const ModalManager: React.FC = () => {
    const isShowingModal:boolean = false;
    const [showModal, setShowModal] = useState(isShowingModal);
    const handleClick() => {
        // return <Modal></Modal>
    }
    return (
        <div>
            <input></input>
            <button onClick={}>Открыть</button>
        </div>

    )
}