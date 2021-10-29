import React from 'react';
import {  NavLink } from 'react-router-dom';
import {FaSolarPanel, FaHandHoldingUsd, FaFolder} from 'react-icons/fa';
import './Sidebar.scss'; 


function Sidebar() {

    return (
        <div className="sidebar">
            <nav>
                <ul className="sidebarItems">
                    <NavLink exact to={'/'} style={{ textDecoration: 'none' }} activeClassName="sidebarActiveTab">
                        <li className=" ">
                            <div>
                            <FaSolarPanel  className="sideBarIcons"/>
                            <div>Usina </div>
                            </div>
                        </li>
                    </NavLink>

                    <NavLink exact to={'/rendimentos'} style={{ textDecoration: 'none' }} activeClassName="sidebarActiveTab">
                        <li className=" ">
                            <div>
                            <FaHandHoldingUsd className="sideBarIcons"/>
                            <div>Rendimentos</div>
                            </div>
                        </li>
                    </NavLink>
                    <NavLink exact to={'/gerenciarInvestidores'} style={{ textDecoration: 'none' }} activeClassName="sidebarActiveTab ">
                        <li className=" ">
                            <div>
                            <FaFolder className="sideBarIcons"/>
                            <div> Gerenciar Investidores</div>
                            </div>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
