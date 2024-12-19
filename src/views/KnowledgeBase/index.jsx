import React, { useState } from 'react';
import './style.css';
import PageLayout from '../../components/knowledge-Layout';

const KnowledgeBase = ({ isDark }) => {


    const items = [
        {
            title: 'React',
            description: '这里是',
            children: [
                { image: 'react-image-url', link: 'https://reactjs.org' },
                { image: 'react-image-url', link: 'https://reactjs.org' },
                { image: 'react-image-url', link: 'https://reactjs.org' },
                { image: 'react-image-url', link: 'https://reactjs.org' },

            ]
        },
        {
            title: 'Nodejs',
            description: '这',
            children: [
                { image: 'nodejs-image-url', link: 'https://nodejs.org' }
            ]
        },
        {
            title: 'Vue',
            description: '这是项',
            children: [
                { image: 'vue-image-url', link: 'https://vuejs.org' }
            ]
        },
        {
            title: '计算机',
            description: '这。',
            children: [
                { image: 'computer-image-url', link: 'https://computer.org' }
            ]
        },
    ];

    const [selectedItem, setSelectedItem] = useState(items[0]);

    const sidebarContent = (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index} onClick={() => setSelectedItem(item)} className='list-item'>
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>
    );

    const mainContent = (
        <div>
            <h1>{selectedItem.title}</h1>
            <div className="item-grid">
                {selectedItem.children.map((child, index) => (
                    <div key={index} className="item-card">
                        <img src={child.image} alt={child.title} />
                        <h3>{child.title}</h3>
                        <p>{child.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <PageLayout
            headerContent="知识库"
            sidebarContent={sidebarContent}
            mainContent={mainContent}
            footerContent="页面文章跳转到其他部分"
        />
    );
};

export default KnowledgeBase; 