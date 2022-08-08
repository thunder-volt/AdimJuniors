import React from 'react'
import { useState } from 'react';
import Knowmore from './Knowmore';
import Edit from './Edit'
const Cards = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);
    const data = [
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"
        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
        {
            heading: "Comp",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum.Placeat quae similique pariatur sint deserunt alias omnis",
            date: "20/08/2022",
            venue: "Chennai",
            ques: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.",
            ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!"

        },
    ]
    return (
        <div className='container'>

            <div className='card-bdy'>
                {
                    data.map((data) => {
                        return <div className='card'>
                            <div className='img'></div>
                            <div className='ttl'><p>{data.heading}</p></div>
                            <div className='dsp'><p>{data.description}</p></div>
                            <div className='extra'><p>{data.date}</p>
                                <p>{data.venue}</p></div>
                            <div className='faq'><h2>FAQ</h2>
                                <div className='ques-ans'>
                                    <p className='ques' >{data.ques}</p>
                                    <p className='ans'>{data.ans}</p>
                                    <p className='ques'>{data.ques}</p>
                                    <p className='ans'>{data.ans}</p>
                                </div>
                            </div>
                            <div className='link'>
                                <div>
                                    <button onClick={() => {

                                        setOpenModal1(true);
                                        setOpenModal(false);
                                        window.scroll(0, 0);
                                    }}>Edit</button>

                                </div>
                                <div>
                                    <button
                                    // onClick={() => {
                                    //     setOpenModal(true);
                                    //     setOpenModal1(false)
                                    //     window.scroll(0, 0);
                                    // }}
                                    >Delete</button>

                                </div>
                            </div>
                        </div>
                    })
                }
                {/* <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    <div className='faq'>
                        <h2>FAQ</h2>
                        <div className='ques-ans'>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                        </div>
                    </div>
                    <div className='link'>
                        <div>
                            <button >Edit</button>

                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                                // const root = document.getElementsByClassName("App");
                                // root.style.display = "none";

                            }}>Delete</button>

                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    <div className='faq'>
                        <h2>FAQ</h2>
                        <div className='ques-ans'>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                        </div>
                    </div>
                    <div className='link'>
                        <div>
                            <button>Edit</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='card-bdy'>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    <div className='faq'>
                        <h2>FAQ</h2>
                        <div className='ques-ans'>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                        </div>
                    </div>
                    <div className='link'>
                        <div>
                            <button>Edit</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0);
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='img'>
                    </div>
                    <div className='ttl'>
                        <p>Comp</p>
                    </div>
                    <div className='dsp'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem beatae perferendis! Molestiae voluptates consectetur reiciendis illo architecto repudiandae sapiente adipisci harum. Placeat quae similique pariatur sint deserunt alias omnis.
                        </p>
                    </div>
                    <div className='extra'>
                        <p>01/08/2022</p>
                        <p>Chennai</p>
                    </div>
                    <div className='faq'>
                        <h2>FAQ</h2>
                        <div className='ques-ans'>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                            <p className='ques'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente commodi velit fuga ex quasi sit.
                            </p>
                            <p className='ans'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo minus id veritatis eligendi, eveniet odit!
                            </p>
                        </div>
                    </div>
                    <div className='link'>
                        <div>
                            <button>Edit</button>
                        </div>
                        <div>
                            <button onClick={() => {
                                setOpenModal(true);
                                window.scroll(0, 0)
                            }}>Delete</button>
                        </div>
                    </div>
                </div> */}

            </div>
            {openModal && < Knowmore closeModal={setOpenModal} />}
            {openModal1 && < Edit closeModal1={setOpenModal1} />}
        </div>
    )
}

export default Cards