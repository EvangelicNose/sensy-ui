import React, { useState } from "react";
import "./input.sass"
import { IconButton } from "@mui/material";
import iconVisibilityOn from "../assets/icons/icon_visibility_on.svg"
import iconVisibilityOff from "../assets/icons/icon_visibility_off.svg"


const SyTextField = ({ label, name, icon, placeholder, helper, type, error, ...props }) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    if (type === 'textarea') return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <textarea
                className={`${icon ? "sy-input-w-icon" : "sy-input"}${error ? " error" : ""}`}
                id={name}
                name={name}
                placeholder={placeholder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />
            {helper && <small className="sy-helper">{helper}</small>}
        </div>
    )

    if (type === 'password') return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <div className="full-width flex-row">
                <input
                    className={`sy-input-w-icon${error ? " error" : ""}`}
                    id={name}
                    type={isPasswordVisible ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                <div className={`sy-input-w-icon-end-adornment${isFocused ? " focused" : ""}${error ? " error" : ""} no-padding`}>
                    <IconButton size="small" onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                        <img src={isPasswordVisible ? iconVisibilityOff : iconVisibilityOn} alt="iconVisibilityOn.svg" />
                    </IconButton>
                </div>
            </div>
            {helper && <small className="sy-helper">{helper}</small>}
        </div>
    )

    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <div className="full-width flex-row">
                <input
                    className={`${icon ? "sy-input-w-icon" : "sy-input"}${error ? " error" : ""}`}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
                {icon && <div className={`sy-input-w-icon-end-adornment${isFocused ? " focused" : ""}${error ? " error" : ""}`}>
                    <img src={icon} alt="icon" />
                </div>}
            </div>
            {helper && <small className="sy-helper">{helper}</small>}
        </div>
    )
}


export default SyTextField