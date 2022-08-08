import React from 'react'

const Knowmore = ({ closeModal }) => {

    return (
        <div className='modal'>

            <div className='more'>
                <div className='cancel'>
                    <button onClick={() => closeModal(false)}>X</button>
                </div>
                <div className='heading'>
                    <h2>Add Task</h2>
                </div>
                <form action="">
                    <label htmlFor="Name" className='label'>Name</label>
                    <input type="text" id='Name' className='input' />
                    <label htmlFor="Description" className='label'>Description</label>
                    <input type="text" name="" id="Description" className='input' />
                    <label htmlFor="Venue" className='label'>Venue</label>
                    <input type="text" name="" id="Venue" className='input' />
                    <label htmlFor="Deadline" className='label'>Deadline</label>
                    <input type="date" name="" id="Deadline" className='input' />
                    <label htmlFor="Date" className='label'>Date</label>
                    <input type="date" name="" id="Date" className='input' />
                    <label htmlFor="img" className='label cursor'>Click To Upload Image
                        <input type="file" id='img' className='input' accept="image/png, image/jpg, image/gif, image/jpeg" /></label>

                    <div id='btn'>
                        <button id='' className='add-btn'>Add</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Knowmore