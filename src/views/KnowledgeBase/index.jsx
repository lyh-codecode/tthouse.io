import React from 'react';
import StarField from '../../components/StarField';
import './style.css';

const KnowledgeBase = ({ isDark }) => {
    const items = [
        { title: '项目1', description: '这是项目1的描述' },
        { title: '项目2', description: '这是项目2的描述' },
        { title: '项目3', description: '这是项目3的描述' },
        { title: '项目4', description: '这是项目4的描述' },
        // 添加更多项目...
    ];

    return (
        <div style={{ position: 'relative', overflow: 'hidden' }}>
            <StarField isDark={isDark} />
            <div style={{ position: 'relative', zIndex: 1 }} className={isDark ? 'dark-theme' : 'light-theme'}>
                <h1>我的知识库</h1>
                <div className="item-grid">
                    {items.map((item, index) => (
                        <div className="item-card" key={index}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KnowledgeBase; 