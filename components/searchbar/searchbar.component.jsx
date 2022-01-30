import React from "react";

const SearchBar = ({ type, placeholder, handleChange }) => {

    const defaultStyles = " ec-w-9/12 ec-block ec-rounded-lg ec-m-auto ec-p-3 ec-bg-gray-200 sm:ec-text-xl"
    return (
        <input type={type} placeholder={placeholder} onChange={handleChange} className={defaultStyles} />
    )
}

export default SearchBar;