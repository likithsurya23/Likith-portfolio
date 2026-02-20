import { useEffect, useState } from "react";

/**
 * Custom hook to encapsulate the network animation logic.
 * 
 * @param {React.RefObject} canvasRef - Reference to the canvas element.
 * @param {Object} options - Configuration options for the animation.
 * @param {number} options.numPoints - Number of points in the network.
 * @param {number} options.connectionDistance - Max distance for connections.
 * @param {number} options.velocity - Speed of points.
 * @param {number} options.radiusBase - Base radius for points.
 * @param {number} options.radiusVar - Variable radius added to base.
 * @param {number} options.opacityMult - Multiplier for connection opacity.
 * @param {string} options.strokeDark - Stroke color for connections in dark mode.
 * @param {string} options.strokeLight - Stroke color for connections in light mode.
 */
const useNetworkAnimation = (canvasRef, {
    numPoints = 20,
    connectionDistance = 150,
    velocity = 0.2,
    radiusBase = 1.5,
    radiusVar = 2.5,
    opacityMult = 0.6,
    strokeDark = 'rgba(255, 255, 255, 0.1)',
    strokeLight = 'rgba(0, 0, 0, 0.08)',
} = {}) => {
    const [reducedMotion, setReducedMotion] = useState(
        typeof window !== "undefined"
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleChange = (e) => setReducedMotion(e.matches);

        mediaQuery.addEventListener("change", handleChange);
        return () => mediaQuery.removeEventListener("change", handleChange);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        let points = [];
        let mouseX = -1000;
        let mouseY = -1000;

        // Handle mouse move for interactive effect
        const handleMouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Initialize points
        const initPoints = () => {
            points = [];
            for (let i = 0; i < numPoints; i++) {
                const radius = radiusBase + Math.random() * radiusVar;
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * velocity,
                    vy: (Math.random() - 0.5) * velocity,
                    radius,
                    originalRadius: radius,
                });
            }
        };

        // Resize handler
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPoints();
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update points - skip if reduced motion is enabled
            if (!reducedMotion) {
                points.forEach(point => {
                    point.x += point.vx;
                    point.y += point.vy;

                    // Bounce off edges
                    if (point.x < 0 || point.x > canvas.width) {
                        point.vx *= -1;
                        point.x = Math.max(0, Math.min(canvas.width, point.x));
                    }
                    if (point.y < 0 || point.y > canvas.height) {
                        point.vy *= -1;
                        point.y = Math.max(0, Math.min(canvas.height, point.y));
                    }

                    // Mouse interaction
                    const dx = mouseX - point.x;
                    const dy = mouseY - point.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        const angle = Math.atan2(dy, dx);
                        const force = (100 - distance) / 100 * 0.5;
                        point.x -= Math.cos(angle) * force;
                        point.y -= Math.sin(angle) * force;
                        point.radius = point.originalRadius * 1.5;
                    } else {
                        point.radius = point.originalRadius;
                    }
                });
            }

            // Draw connections
            const isDark = document.documentElement.classList.contains('dark');
            ctx.strokeStyle = isDark ? strokeDark : strokeLight;
            ctx.lineWidth = 1;

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        const opacity = (1 - distance / connectionDistance) * opacityMult;

                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);

                        const gradient = ctx.createLinearGradient(
                            points[i].x, points[i].y, points[j].x, points[j].y
                        );

                        if (isDark) {
                            gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
                            gradient.addColorStop(1, `rgba(200, 200, 255, ${opacity})`);
                        } else {
                            gradient.addColorStop(0, `rgba(0, 0, 0, ${opacity})`);
                            gradient.addColorStop(1, `rgba(100, 100, 100, ${opacity})`);
                        }

                        ctx.strokeStyle = gradient;
                        ctx.stroke();
                    }
                }
            }

            // Draw points
            points.forEach(point => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);

                // Glow effect
                ctx.shadowColor = isDark
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(0, 0, 0, 0.3)';
                ctx.shadowBlur = 8;

                ctx.fillStyle = isDark
                    ? 'rgba(255, 255, 255, 0.7)'
                    : 'rgba(0, 0, 0, 0.6)';
                ctx.fill();

                // Reset shadow
                ctx.shadowBlur = 0;

                // Inner glow for some points
                if (point.radius > 3) {
                    ctx.beginPath();
                    ctx.arc(point.x, point.y, point.radius * 0.4, 0, Math.PI * 2);
                    ctx.fillStyle = isDark
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'rgba(0, 0, 0, 0.9)';
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [canvasRef, numPoints, connectionDistance, velocity, radiusBase, radiusVar, opacityMult, strokeDark, strokeLight, reducedMotion]);
};

export default useNetworkAnimation;
