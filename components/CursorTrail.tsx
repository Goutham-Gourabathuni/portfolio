"use client"
import { useRef, useEffect, useState, useCallback } from 'react';

// Use a custom hook to encapsulate the canvas/animation logic
const useCursorTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Array<{x: number, y: number, life: number, originalLife: number}>>([]);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef(performance.now());
  
  // Settings for the trail (easier to adjust here)
  const LINE_WIDTH = 10;
  const SHADOW_BLUR = 15;
  const DECAY_RATE = 3.5; // Controls how quickly the trail fades (higher is faster)
  // UPDATED: Changed color base from '16, 185, 129' to '50, 255, 150' for a lighter, brighter green-lime glow.
  const STROKE_COLOR_BASE = '50, 255, 150'; // R, G, B components for electric lime green

  // 1. Fades points and removes them if life < 0
  const fade = useCallback((dt: number) => {
    setPoints(currentPoints => {
      // Create a mutable copy to work with
      const newPoints = [...currentPoints];

      // We process the points backward for safe array modification (splice)
      for (let i = newPoints.length - 1; i >= 0; i--) {
        // Decrease life
        newPoints[i].life -= dt * DECAY_RATE; 
        if (newPoints[i].life < 0) {
          newPoints.splice(i, 1);
        }
      }
      return newPoints;
    });
  }, [DECAY_RATE]);

  // 2. Draws the trail
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || points.length === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Clear the canvas on each frame
    ctx.clearRect(0, 0, canvas.width, canvas.height); 

    ctx.save();
    
    // Apply visual styles
    ctx.lineWidth = LINE_WIDTH;
    
    // Set Shadow for the glowing effect - uses the new lighter color
    ctx.shadowColor = `rgba(${STROKE_COLOR_BASE}, 0.9)`; 
    ctx.shadowBlur = SHADOW_BLUR; 

    ctx.beginPath();
    
    // Move to the first point
    ctx.moveTo(points[0].x, points[0].y);

    // Draw lines to subsequent points
    for (let i = 1; i < points.length; i++) {
      const { x, y, life, originalLife } = points[i];
      const { x: px, y: py } = points[i-1];

      // Calculate alpha based on life remaining
      const alpha = Math.max(0, life / originalLife); // Ensure alpha is not negative
      
      // We draw line segments. We need to set the style BEFORE drawing the segment to ensure proper fading.
      // This style applies to the segment ending at (x, y).

      ctx.strokeStyle = `rgba(${STROKE_COLOR_BASE}, ${alpha})`;

      // We need to move back to the previous point and draw to the current point for segments
      // Reset path for segment-based drawing to ensure the color applies correctly per segment
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Ensure the path for the next point starts from the current one
      ctx.moveTo(x, y);
    }
    
    // The final ctx.stroke() is redundant due to segment drawing inside the loop, 
    // but the path is cleared by the subsequent beginPath()
    
    ctx.restore();
  }, [points, LINE_WIDTH, SHADOW_BLUR, STROKE_COLOR_BASE]);

  // 3. Main animation loop
  const loop = useCallback((tNext: number) => {
    const dt = Math.min(0.033, (tNext - lastTimeRef.current) / 1000);
    lastTimeRef.current = tNext;
    
    fade(dt);
    draw();
    
    animationRef.current = requestAnimationFrame(loop);
  }, [fade, draw]);

  // 4. Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Add a new point to the trail
    const newPoint = {
      x: e.clientX,
      y: e.clientY,
      life: 1, // Full life
      originalLife: 1 // Max life for calculating alpha
    };
    // Add the new point. We use the functional update to ensure we have the latest state.
    setPoints(prevPoints => [...prevPoints, newPoint]);
  }, []);


  // --- useEffect Hooks ---

  // Setup: Runs once on mount
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // 5. Setup resize listener and initial dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // 6. Start the animation loop
    animationRef.current = requestAnimationFrame(loop);
    
    // 7. Add mouse listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [loop, handleMouseMove]);

  return canvasRef;
};

export default function CursorTrail() {
  // Use the custom hook to get the ref for the canvas
  const canvasRef = useCursorTrail();

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-10 pointer-events-none" />
  );
}
