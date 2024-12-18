import { useEffect, useState } from 'react';
import './style.css';
import { MoonIcon, SunIcon } from './ThemeIcons';
import { NavLink } from 'react-router-dom';

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
                        Hello 我是小梁
                    </a>
                </div>

                <div className="nav-right">
                    <NavLink to="/" className="nav-link" activeClassName="active">首页</NavLink>
                    <NavLink to="https://github.com/lyh-codecode" className="nav-link" activeClassName="active">我的Github</NavLink>
                    <NavLink to="https://juejin.cn/user/3894900086810922" className="nav-link" activeClassName="active">我的掘金</NavLink>
                    <NavLink to="/about" className="nav-link" activeClassName="active">关于我</NavLink>
                    <button className="theme-toggle" onClick={toggleTheme} title="切换主题">
                        {isDark ? <SunIcon /> : <MoonIcon />}
                    </button>
                </div>
            </div>
        </nav>
    );
}