import React from 'react';
import ArticleIcon from '@mui/icons-material/Article';
import '../css/header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header-logo">
                    <ArticleIcon />
                </div>
                <h1 className="header-name">News app</h1>
            </div>
        </header>
    );
}

export default Header;