import React from 'react';
import './style.css'; // 如果需要样式文件
import ProfileHeader from '../../components/ProfileHeader/index'
import SkillSection from '../../components/SkillSection/index'
const AboutMe = () => {
    return (
        <>
            <div className="about-me">
                <div className="about-me-left">
                    <ProfileHeader />
                </div>

                <div className="personal-info">
                    <h2 className="personal-info-title">幸运的来时路</h2>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;
                        一切源自于2024年5月某个下午决定了要加入工作室的心，然后初次开始接触前端，
                        参加学校的工作室考核，成功加入工作室开始系统学习前端知识。
                        在工作室中遇见了志同道合的朋友和师兄，得到了工作室的资源和师兄的指导，
                        在工作室中参与合作开发，沟通和交流。
                    </p>
                    <p>
                        &nbsp;&nbsp;&nbsp;&nbsp;幸运自己的选择和努力，现在还在快速地成长，希望自己能一直保持热爱~
                    </p>
                </div>

            </div>
            <SkillSection />
        </>
    );
};

export default AboutMe; 