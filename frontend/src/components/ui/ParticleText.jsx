import React, { useEffect, useRef } from 'react';

export default function ParticleText({ text, fontSize = 100 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArray = [];
    let animationFrameId;
    
    // Set canvas dimensions
    canvas.width = canvas.parentElement.clientWidth || 800;
    canvas.height = canvas.parentElement.clientHeight || 300;

    let mouse = {
      x: null,
      y: null,
      radius: 100
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    ctx.fillStyle = 'black';
    ctx.font = `900 ${fontSize}px Inter, sans-serif`;
    ctx.fillText(text, 0, fontSize);
    
    // Extract pixel data
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    class Particle {
      constructor(x, y) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.baseX = x;
        this.baseY = y;
        this.density = (Math.random() * 30) + 1;
      }
      
      draw() {
        ctx.fillStyle = '#6b21a8'; // Purple 800
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;
        
        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 10;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 10;
          }
        }
      }
    }

    function init() {
      particlesArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y += 4) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x += 4) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x + (canvas.width / 2) - (ctx.measureText(text).width / 2);
            let positionY = y + (canvas.height / 2) - (fontSize / 2);
            particlesArray.push(new Particle(positionX, positionY));
          }
        }
      }
    }

    init();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [text, fontSize]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block cursor-default"
    />
  );
}
