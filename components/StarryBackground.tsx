import React, { useEffect, useRef } from 'react';

const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Star configuration
    const starCount = 60; // Sparse, not full of stars
    const stars: { x: number; y: number; size: number; alpha: number; speed: number; phase: number }[] = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5, // Small stars
        alpha: Math.random(),
        speed: Math.random() * 0.15 + 0.05, // Slow movement
        phase: Math.random() * Math.PI * 2 // For twinkling
      });
    }

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      stars.forEach(star => {
        // Twinkle effect using sine wave
        const flicker = Math.sin(time + star.phase) * 0.3 + 0.7; // varies between 0.4 and 1.0
        ctx.globalAlpha = star.alpha * flicker * 0.6; // Overall subtle opacity
        ctx.fillStyle = '#06B6D4'; // Cyan tint for space feel
        
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star upwards slowly
        star.y -= star.speed;
        
        // Wrap around
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
      style={{ background: 'transparent' }} 
    />
  );
};

export default StarryBackground;