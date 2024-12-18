import React from 'react';
import './style.css'

export default function SiteSection({ isDark }) {
    const sites = [
        {
            title: '练习项目',
            description: '学习过程做的demo和总结',
            icon: '💻',
            link: '/practice-projects'
        },
        {
            title: '规划和目标',
            description: '我的短期规划和目标',
            icon: '🎯',
            link: '/planning'
        },
        {
            title: '我的知识库',
            description: '我的学习笔记整理',
            icon: '📚',
            link: '/knowledge-base'
        }
    ]

    const campus = [
        {
            title: '加入易动工作室',
            description: '通过校级工作室易动工作室考核，在工作室中，担任前端开发的相关工作，遇见了一群志同道合的伙伴',
            icon: '∪'
        },
        {
            title: '比赛获奖',
            description: (
                <>
                    1.获得2024年全国大学生数学建模竞赛广东省三等奖 <br />
                    2.获得2024年广东工业大学数学建模校赛三等奖
                </>
            ),
            icon: '🏆'
        }
    ]
    const backgroundColor = isDark ? 'linear-gradient(to bottom right, #dfdfdf, #17171b)' : 'linear-gradient(to bottom right, #000000, #b9b9b9)';
    const textColor = isDark ? 'linear-gradient(to right, #ffffff, #4f49fc)' : 'linear-gradient(to right, #ffffff, #4f49fc)';
    return (
        <>
            <div className='site'>
                <h2>🏠 前端仓库</h2>
                <section className="site-section">
                    {sites.map((site, index) => (
                        <a key={index} href={site.link} className="site-card" style={{ background: backgroundColor }}>
                            <div className="card-content">
                                <div className="card-icon" style={{ backgroundColor: isDark ? '#828282' : '#a0a0a0' }}>{site.icon}</div>
                                <h3 style={{ color: textColor }}>{site.title}</h3>
                                <p style={{ color: textColor }}>{site.description}</p>
                            </div>
                        </a>
                    ))}
                </section>
            </div>

            <div className='site'>
                <h2>🏫 校园经历</h2>
                <section className="site-section">
                    {campus.map((site, index) => (
                        <a key={index} href={site.link} className="site-card2" style={{ background: backgroundColor }}>
                            <div className="card-content">
                                <div className="card-icon" style={{ backgroundColor: isDark ? '#828282' : '#a0a0a0' }}>{site.icon}</div>
                                <h3 style={{ color: textColor }}>{site.title}</h3>
                                <p style={{ color: textColor }}>{site.description}</p>
                            </div>
                        </a>
                    ))}
                </section>
            </div>
        </>
    )
} 