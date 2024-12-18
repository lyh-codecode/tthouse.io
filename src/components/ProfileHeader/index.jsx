import './style.css'
import myIcon from '../../assets/my.jpg'
import ImageModal from '../ImageModal'
import { useState } from 'react'

export default function ProfileHeader() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [copySuccess, setCopySuccess] = useState(false);
    const [isHoveredEmail, setIsHoveredEmail] = useState(false);
    const [isHoveredPhone, setIsHoveredPhone] = useState(false);

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        }).catch(err => {
            console.error('复制失败: ', err);
        });
    };

    return (
        <>
            <div className="profile-info">
                <div className="role">
                    <img
                        className='my-pic'
                        src={myIcon}
                        alt=""
                        onClick={() => setIsModalOpen(true)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="info">
                    <h1 className="gradient-text">basic Info</h1>
                    <p>🧑‍💻 <strong style={{ color: '#4f49fc' }}>前端开发</strong></p>
                    <p>📍 <strong >广东工业大学 27届/信息安全</strong></p>
                    <p className="contact-info">
                        <strong>📫 527835202@qq.com</strong>
                        <button
                            onClick={() => copyToClipboard('527835202@qq.com')}
                            className="copy-button"
                            onMouseEnter={() => setIsHoveredEmail(true)}
                            onMouseLeave={() => setIsHoveredEmail(false)}
                        >
                            复制
                        </button>
                    </p>
                    <p className="contact-info">
                        <strong>📞 13824865910</strong>
                        <button
                            onClick={() => copyToClipboard('13824865910')}
                            className="copy-button"
                            onMouseEnter={() => setIsHoveredPhone(true)}
                            onMouseLeave={() => setIsHoveredPhone(false)}
                        >
                            复制
                        </button>
                    </p>
                    {copySuccess && <div className="copy-success"> 复制成功√</div>}
                </div>
            </div>
            <ImageModal
                isOpen={isModalOpen}
                imageUrl={myIcon}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
} 