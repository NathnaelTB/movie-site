import React from 'react';
import './Bar.css';

const Bar = () => {
    return (
        <div className="bar">
            <h1>Popular Movies</h1>
            <input type="text" className="search-field" placeholder="search here..." />
        </div>
    );
}

export default Bar;