import React, { useState } from 'react';
import './style.css';
import PageLayout from '../../components/knowledge-Layout';
import MarkdownViewer from '../../components/MarkdownViewer';


const PracticeProjects = () => {
    const items = [
        { title: '彷网易云', description: '这是目标2的详细描述。', filePath: '../../assets/wyy.md' },
        { title: '目标2', description: '这是目标2的详细描述。', filePath: '/src/assets/目标2.md' },
        { title: '项目C', description: '这是项目C的详细描述。' },
        { title: '项目D', description: '这是项目D的详细描述。' },
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]); // 默认选择第一个项目

    const sidebarContent = (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => setSelectedItem(item)} style={{ cursor: 'pointer' }}>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );

    const mainContent = (
        <div>
            <h1>{selectedItem.title}</h1>
            <p>{selectedItem.description}</p>
        </div>
    );

    return (
        <PageLayout
            headerContent="练习项目的总结"
            sidebarContent={sidebarContent}
            mainContent={mainContent}
            footerContent="页面文章跳转到其他部分"
        />
    );
};

export default PracticeProjects; 