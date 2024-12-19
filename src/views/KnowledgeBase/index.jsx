import React, { useState } from 'react';
import './style.css';
import PageLayout from '../../components/page-Layout';

const KnowledgeBase = ({ isDark }) => {
    const items = [
        { title: '项目1', description: '这是项目1的详细描述。' },
        { title: '项目2', description: '这是项目2的详细描述。' },
        { title: '项目3', description: '这是项目3的详细描述。' },
        { title: '项目4', description: '这是项目4的详细描述。' },
        // 添加更多项目...
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]); // 默认选择第一个项目

    return (
        <PageLayout>
            <div className="layout-content">
                <aside className="sidebar">
                    <h2>项目列表</h2>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index} onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer' }}>
                                {item.title}
                            </li>
                        ))}
                    </ul>
                </aside>
                <main className="main-content">
                    <h1>{selectedItem.title}</h1>
                    <p>{selectedItem.description}</p>
                </main>
            </div>
        </PageLayout>
    );
};

export default KnowledgeBase; 