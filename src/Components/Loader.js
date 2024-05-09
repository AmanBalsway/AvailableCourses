import "./Loader.css"
import React from 'react';

const Loader = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner"></div>
            <p className="text-blue-500 text-lg font-semibold">loading...</p>
        </div>
    )
}

export default Loader; 