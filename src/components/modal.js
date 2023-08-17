import React from "react";
import "./modal.sass"

const SyModal = ({ children, isOpen, handleClose = () => null, icon }) => {
    return (
        <>
            <div className={`sy-modal ${isOpen ? 'open' : ''}`}>
                <div className="wrapper">

                    {icon && <div className="sy-modal-icon">
                        <img src={icon} alt="icon" />
                    </div>}

                    <div className="sy-modal-content">
                        {children}
                    </div>
                </div>
            </div>
            <div onClick={() => handleClose()} className={`overlay ${isOpen ? 'show' : ''}`} />
        </>
    )
}

export default SyModal;