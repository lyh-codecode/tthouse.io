import React from 'react';
import './style.css';

const PageLayout = ({ headerContent, sidebarContent, mainContent, footerContent }) => {
    return (
        <div className="new-layout">
            <header className="header">{headerContent}</header>
            <div className="layout-content">
                <aside className="sidebar">{sidebarContent}</aside>
                <main className="main-content">{mainContent}</main>
            </div>
            <footer className="footer">{footerContent}</footer>
        </div>
    );
};

export default PageLayout; 