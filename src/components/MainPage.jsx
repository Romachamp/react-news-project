import React from 'react';
import Header from './Header';
import News from './News';
import NavBar from "./NavBar";

function MainPage() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="sections">
                <NavBar/>
                <News/>
            </div>
        </div>
    );
}

export default MainPage;