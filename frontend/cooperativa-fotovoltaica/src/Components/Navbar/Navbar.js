import React from 'react';
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.scss';

function Navbar({displaySidebar, setSidebar}) {

    const OnDisplaySidebar =()=>{

        setSidebar(!displaySidebar);

    }

    return (
        <div className='navbar'>
            {displaySidebar 
                ?
                <FaTimes className="navbarIcons" onClick={OnDisplaySidebar } onKeyDown={OnDisplaySidebar }/>
                :
                <FaBars className="navbarIcons" onClick={OnDisplaySidebar } onKeyDown={OnDisplaySidebar }/>
        } 
            <div>Energia Compartilhada</div>
        </div>
    )
}

export default Navbar
