import React from 'react';
import "./Com.css";
import { useNavigate } from 'react-router-dom';

const Timer = () => {
    const navigate = useNavigate();
    return(
        <div className = 'Timer'>
            <h1>Timer</h1>
        </div>
    );
}

export default Timer;