import React, { useEffect, useRef } from 'react';

const MagnetGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Grid settings
    const gridSize = 40;
    const dotSize = 1;
    
    // "Plates" moving on the grid
    interface Plate {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      speed: number;
      wait: number;
    }

    const plates: Plate[] = [];
    const numPlates = 8;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Initialize plates
    for (let i = 0; i < numPlates; i++) {
      plates.push({
        x: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
        targetX: Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize,
        targetY: Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize,
        vx: 0,
        vy: 0,
        radius: 12 + Math.random() * 8, // Different plate sizes
        color: `rgba(255, 255, 255, ${0.1 + Math.random() * 0.2})`,
        speed: 2 + Math.random() * 2,
        wait: 0,
      });
    }

    const draw = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Grid
      ctx.fillStyle = '#222';
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          ctx.fillRect(x, y, dotSize, dotSize);
        }
      }

      // Draw Rails (faint lines)
      ctx.strokeStyle = '#111';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Update and Draw Plates
      plates.forEach(plate => {
        // Move towards target
        if (plate.wait > 0) {
          plate.wait--;
        } else {
          const dx = plate.targetX - plate.x;
          const dy = plate.targetY - plate.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < plate.speed) {
            plate.x = plate.targetX;
            plate.y = plate.targetY;
            plate.wait = 30 + Math.random() * 60; // Pause at intersection

            // Pick new target (adjacent intersection)
            const direction = Math.floor(Math.random() * 4);
            switch (direction) {
              case 0: plate.targetX += gridSize * (Math.floor(Math.random() * 3) + 1); break; // Right
              case 1: plate.targetX -= gridSize * (Math.floor(Math.random() * 3) + 1); break; // Left
              case 2: plate.targetY += gridSize * (Math.floor(Math.random() * 3) + 1); break; // Down
              case 3: plate.targetY -= gridSize * (Math.floor(Math.random() * 3) + 1); break; // Up
            }
            
            // Keep in bounds
            if (plate.targetX < 0) plate.targetX = gridSize;
            if (plate.targetX > canvas.width) plate.targetX = canvas.width - gridSize;
            if (plate.targetY < 0) plate.targetY = gridSize;
            if (plate.targetY > canvas.height) plate.targetY = canvas.height - gridSize;

          } else {
            plate.x += (dx / dist) * plate.speed;
            plate.y += (dy / dist) * plate.speed;
          }
        }

        // Draw Plate
        ctx.beginPath();
        ctx.arc(plate.x, plate.y, plate.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff'; // Core
        ctx.fill();
        
        // Glow
        ctx.beginPath();
        ctx.arc(plate.x, plate.y, plate.radius + 4, 0, Math.PI * 2);
        ctx.strokeStyle = plate.color;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Trail connection to grid
        ctx.beginPath();
        ctx.moveTo(plate.x, plate.y);
        ctx.lineTo(plate.x, plate.y + 20); // Shadow/magnetic link
        ctx.strokeStyle = '#333';
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 opacity-60"
    />
  );
};

export default MagnetGrid;
