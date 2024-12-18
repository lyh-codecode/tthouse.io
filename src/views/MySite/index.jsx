import React from 'react';
import './style.css'; // 确保有样式文件

const MySite = ({ showOptions, setShowOptions }) => {
    return (
        <div className="my-site"
            onMouseEnter={() => setShowOptions(true)}
            onMouseLeave={() => setShowOptions(false)}
        >
            <div className="options-card">
                <ul className="options">
                    <li>
                        <a href="https://github.com/lyh-codecode" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://juejin.cn/user/3894900086810922" target="_blank" rel="noopener noreferrer">掘金</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MySite;