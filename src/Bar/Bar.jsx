import React from 'react';
import './Bar.css';

const Bar = props => {
    const changeHandler = event => {
        props.onSearchChange(event.target.value);
    }
    return (
        <div className="bar">
            <h1>Popular Movies</h1>
            <input type="text" className="search-field" placeholder="search here..." onChange={changeHandler} />
        </div>
    );
}

export default Bar;