import React, { useState } from 'react';
import './style.css';

const PageLayout = ({ headerContent, sidebarContent, mainContent, footerContent }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="new-layout">
            <div className="layout-content">
                <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
                    {sidebarContent}
                </aside>
                <div className="sidebar-toggle" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    {isSidebarOpen ? '←' : '→'}
                </div>
                <main className="main-content">{mainContent}</main>
            </div>
            <footer className="footer">{footerContent}</footer>
        </div>
    );
};

export default PageLayout; 