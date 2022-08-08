import React from 'react'

const Edit = ({ closeModal1 }) => {
    const data = [
        {
            id: 0,
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"
        },
        {
            id: 1,
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
        {
            id: 2,
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
        {
            id: 3,
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
    ]
    return (
        <div className='modal'>

            <div className='more'>
                <div className='cancel'>
                    <button onClick={() => closeModal1(false)}>X</button>
                </div>
                <div className='heading'>
                    <h2>Edit Task</h2>
                </div>
                <form action="">
                    <label htmlFor="Name" className='label'>Name</label>
                    <input type="text" id='Name' className='input' value={data[0].heading} />
                    <label htmlFor="Description" className='label'>Description</label>
                    <input type="text" name="" id="Description" className='input' value={data[0].description} />
                    <label htmlFor="Venue" className='label'>Venue</label>
                    <input type="text" name="" id="Venue" className='input' value={data[0].venue} />
                    <label htmlFor="Deadline" className='label'>Deadline</label>
                    <input type="date" name="" id="Deadline" className='input' value={data[0].date} />
                    <label htmlFor="Date" className='label'>Date</label>
                    <input type="date" name="" id="Date" className='input' value={data[0].date} />
                    <label htmlFor="img" className='label cursor'>Click To Upload Image
                        <input type="file" id='img' className='input' accept="image/png, image/jpg, image/gif, image/jpeg" /></label>

                    <div id='btn'>
                        <button id='' className='add-btn'>Edit</button>
                    </div>


                </form>
            </div>
        </div>
    )
}

export default Edit