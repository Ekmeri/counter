import React, { useState } from 'react';
import './Counterhook.css';

const Counterhook = () => {

    const [counter, setCount] = useState(0);

    const clickAdd = () => {
        setCount(counter +1);
    }

    const clickRemove = () => {
        counter <= 0 ? setCount(0) : setCount(counter -1);
    }

    const clickReset = () => {
        setCount(0);
    }

    let classname = "counter";
        counter % 2 === 0 ? classname = "counter even" : classname = "counter odd";
        if (counter % 10 === 0 && counter !== 0)
        classname = "counter ten";
        
        return (
            
        <div className={classname}>{counter}
        <div className='buttons'>
         <button onClick={clickAdd}>Add one</button>
         <button onClick={clickRemove}>Remove one</button>
         <button onClick={clickReset}>Reset</button>
        </div>
        </div>
        );
    
}

export default Counterhook;