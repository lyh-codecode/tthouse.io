import React from 'react';
import './style.css';

const PageLayout = ({ children }) => {
    return (
        <div className="new-layout">
            <header className="header">Header</header>
            <div className="layout-content">
                <aside className="sidebar">Sidebar</aside>
                <main className="main-content">{children}</main>
            </div>
            <footer className="footer">Footer</footer>
        </div>
    );
};

export default PageLayout; 