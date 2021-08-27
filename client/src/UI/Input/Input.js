import React from 'react';

const Input = ({name}) => {
    const isHiddenPass = name === "Password" ? "password" : "text"

    return (
        <div className="input-field col s6">
            <input id="last_name" type={isHiddenPass} className="validate" />
                <label htmlFor="last_name">{name}</label>
        </div>
    );
};

export default Input;