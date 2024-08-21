import React, { useEffect, useRef } from 'react';

const AnimatedGradientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#1a1a2e');
    gradient.addColorStop(0.5, '#16213e');
    gradient.addColorStop(1, '#0f3460');

    let time = 0;

    const animate = () => {
      time += 0.005;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update gradient
      gradient.addColorStop(0, `hsl(${Math.sin(time) * 60 + 220}, 60%, 30%)`);
      gradient.addColorStop(0.5, `hsl(${Math.cos(time) * 60 + 260}, 60%, 40%)`);
      gradient.addColorStop(1, `hsl(${Math.sin(time + 1) * 60 + 300}, 60%, 50%)`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add a subtle wave effect
      ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      for (let i = 0; i < canvas.width; i += 20) {
        const y = Math.sin(i * 0.01 + time) * 20 + canvas.height / 2;
        ctx.beginPath();
        ctx.arc(i, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default AnimatedGradientBackground;