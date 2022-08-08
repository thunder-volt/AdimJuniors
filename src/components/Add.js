import React from 'react'
import { useState } from 'react';
import Knowmore from './Knowmore';
const Add = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className='add'>
            <div className='add-btn'>
                <button onClick={() => {
                    setOpenModal(true);
                    window.scroll(0, 0);
                }}>Add</button>
            </div>
            {openModal && < Knowmore closeModal={setOpenModal} />}
        </div>
    )
}

export default Add