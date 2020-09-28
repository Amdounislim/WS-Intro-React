import React from 'react'
import './Navbar.css'

function Navbar (){

    let title="Project"

    return(
        <header>
            <h1 className="title">{title}</h1>
            <ul>
                <li>Home</li>
                <li>Contacts</li>
                <li>Services</li>
            </ul>
        </header>
    )
}

export default Navbar;