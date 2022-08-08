import React from 'react'


function Header() {
    return (
        <header>
            <nav className="nav">
                <div className='imag'>
                    <img src="../image/logo.png" />
                </div>
                <ul className="nav-items">
                    <li><a >HOME</a></li>
                    <li><a>COMPETITIONS</a></li>
                    <li><a>WORKSHOPS</a></li>
                    <li><a>CHAMPIONSHIP</a></li>
                    <li><button className='signup'>SIGN UP</button></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;