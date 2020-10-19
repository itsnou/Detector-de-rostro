import React from 'react';

const Rank = ({ name, entries}) =>{
    return(
        <div>
            <div className='black f3'>
                {`${name}, tu rango actual es... `}
            </div>
            <div className='black f1'>
                {entries}
            </div>
        </div>
    )
}

export default Rank;

