import React from 'react';
import '../css/navBar.css';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function NavBar(props) {
    return (
        <div className="nav-bar">
            <nav className="nav-menu">
                <ul className="nav-list">
                    <li><span className="icon"><ArrowDropDownIcon/></span> <a href="#" className="nav-link link">Home</a></li>
                    <li><span className="icon"><ArrowDropDownIcon/></span> <a href="#" className="nav-link link">Add News</a></li>
                    <li><span className="icon"><ArrowDropDownIcon/></span> <a href="#" className="nav-link link">About</a></li>
                    <li><span className="icon"><ArrowDropDownIcon/></span> <a href="#" className="nav-link link">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;