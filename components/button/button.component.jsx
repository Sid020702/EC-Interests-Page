import React from "react";

const Button = ({ children, handleClick }) => {
    const defaultStyles = " ec-w-1/2 ec-my-5 ec-block ec-m-auto ec-p-4 ec-bg-blue-500 ec-text-white ec-text-lg ec-rounded-xl ec-font-semibold sm:ec-w-1/4 lg:ec-w-1/6"
    return (
        <button className={defaultStyles} onClick={handleClick}>{children}</button>
    )
}

export default Button