import { useEffect, useState } from 'react';
import './style.css';
import { MoonIcon, SunIcon } from './ThemeIcons';
import { NavLink } from 'react-router-dom';
import MySite from '../../views/MySite';

export default function Navbar({ isDark, setIsDark }) {
    const [showMySiteOptions, setShowMySiteOptions] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDark(savedTheme ? savedTheme === 'dark' : prefersDark);
    }, [setIsDark]);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle('light-theme', newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    };

    return (
        <nav className="navbar">
            <div className="nav-content">
                <div className="nav-left">
                    <a href="/" className="nav-logo">
                        Hello 我是小梁，一个前端开发工程师
                    </a>
                </div>

                <div className="nav-right">
                    <NavLink to="/" className="nav-link" activeClassName="active">首页</NavLink>
                    <div
                        className="nav-link"
                        onMouseEnter={() => setShowMySiteOptions(true)}
                        onMouseLeave={() => setShowMySiteOptions(false)}
                    >
                        我的站点
                        {showMySiteOptions && (
                            <MySite showOptions={showMySiteOptions} setShowOptions={setShowMySiteOptions} />
                        )}
                    </div>
                    <NavLink to="/about" className="nav-link" activeClassName="active">关于我</NavLink>
                    <button className="theme-toggle" onClick={toggleTheme} title="切换主题">
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </div>
        </nav>
    );
}