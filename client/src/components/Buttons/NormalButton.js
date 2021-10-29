import React from 'react';

function NormalButton({type, text, handleButton}) {
    return (
        <div className="mb-2">
            <button
                type={type}
                className="transition duration-200 ease-in-out bg-white text-blue-500 hover:bg-blue-800 hover:text-white py-3 rounded-md w-full"
                onClick={handleButton}
            >
                <p className="text-lg font-semibold">{text}</p>
            </button>
        </div>
    );
}

export default NormalButton;
