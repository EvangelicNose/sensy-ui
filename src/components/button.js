import React, { useEffect, useState } from 'react';
import './button.sass';
import loader from '../assets//icons/loader.svg';

const RippleButton = ({ children, onClick, isLoading, isDisabled, variant }) => {
    const [coords, setCoords] = useState({ x: -1, y: -1 });
    const [isRippling, setIsRippling] = useState(false);

    useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
            setIsRippling(true);
            setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
    }, [coords]);

    useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
    }, [isRippling]);

    return (
        <button
            className={`sy-button${isLoading ? " loading" : ""}${isDisabled ? " disabled" : ""}${variant === 'transparent' ? " transparent" : ""}`}
            onClick={e => {
                const rect = e.target.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                onClick && onClick(e);
            }}
            disabled={isDisabled}
        >
            {isRippling ? (
                <span
                    className="ripple"
                    style={{
                        left: coords.x,
                        top: coords.y
                    }}
                />
            ) : (
                ''
            )}
            {isLoading
                ? <img src={loader} className='loader-icon' alt="loader.svg" />
                : <span className="btn-content">{children}</span>
            }
        </button>
    );
};

export default RippleButton;