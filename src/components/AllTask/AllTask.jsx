import React from 'react';

const AllTask = ({setStatus, }) => {
    return (
        <button type="button" className='sidebar__all' onClick={() => setStatus('all')}>
            <span className='sidebar__all_text'>Все задачи</span>
        </button>
    );
};

export default AllTask;