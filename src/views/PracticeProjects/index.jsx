import React, { useState } from 'react';
import './style.css';
import PageLayout from '../../components/knowledge-Layout';
import MarkdownViewer from '../../components/MarkdownViewer';

const PracticeProjects = () => {
    const items = [
        { title: '复现网易云音乐', description: '这是目标2的详细描述。', filePath: '/src/assets/wyy.md' },
        { title: '目标2', description: '这是目标2的详细描述。', filePath: '/src/assets/目标2.md' },
        { title: '项目C', description: '这是项目C的详细描述。', filePath: '/src/assets/项目C.md' },
        { title: '项目D', description: '这是项目D的详细描述。', filePath: '/src/assets/项目D.md' },
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

    const mainContent = (<MarkdownViewer filePath={selectedItem.filePath} />);

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