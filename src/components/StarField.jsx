import React, { useEffect, useRef } from 'react';

const StarField = ({ isDark }) => {
    const canvasRef = useRef(null);
    const stars = [];

    const createStars = (num) => {
        stars.length = 0;
        for (let i = 0; i < num; i++) {
            stars.push({
                x: Math.random() * window.innerWidth,
                y: 0,
                radius: Math.random() * 2 + 1,
                alpha: Math.random(),
                speed: Math.random() * (isDark ? 0.5 : 0.2) + 0.1, // 浅色主题下速度更慢
            });
        }
    };

    const drawStars = (ctx) => {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${star.alpha})` : `rgba(255, 215, 0, ${star.alpha})`; // 浅色主题下使用金色
            ctx.fill();

            if (isDark) {
                star.x -= star.speed;
                star.y += star.speed;
            } else {
                star.x += star.speed;
                star.y += star.speed;
            }

            if (star.y > window.innerHeight || star.x > window.innerWidth) {
                star.y = 0;
                star.x = Math.random() * window.innerWidth;
            }
        });
    };

    const animate = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const ctx = canvas.getContext('2d');
            drawStars(ctx);
            requestAnimationFrame(animate);
        }
    };

    useEffect(() => {
        createStars(200);
        animate();
    }, [isDark]);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default StarField;