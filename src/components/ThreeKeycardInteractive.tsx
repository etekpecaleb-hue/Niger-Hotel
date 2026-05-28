import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useHotel } from '../context/HotelContext';

interface KeycardProps {
  suiteName?: string;
  tier?: string;
}

export const ThreeKeycardInteractive: React.FC<KeycardProps> = ({ 
  suiteName = "Aso Villa Presidential Suite", 
  tier = "VVIP ELITE ACCESS" 
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const cardGroupRef = useRef<THREE.Group | null>(null);
  const { theme } = useHotel();

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === 'ivory' ? 0.9 : 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(
      theme === 'ivory' ? 0x047857 : 0xf59e0b, 
      2
    );
    dirLight.position.set(3, 4, 4);
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0xffffff, theme === 'ivory' ? 0.6 : 1);
    rimLight.position.set(-3, -3, -2);
    scene.add(rimLight);

    const cardGroup = new THREE.Group();
    cardGroupRef.current = cardGroup;

    const cardWidth = 2.4;
    const cardHeight = 1.4;
    const cardDepth = 0.04;
    const cardGeom = new THREE.BoxGeometry(cardWidth, cardHeight, cardDepth);
    
    // Theme-aware palette
    const isIvory = theme === 'ivory';
    const bgBase = isIvory ? '#fafaf7' : '#0c0a09';
    const bgCard = isIvory ? '#ffffff' : '#1c1917';
    const accentHex = isIvory ? '#047857' : '#d97706';
    const accentLight = isIvory ? '#10b981' : '#fbbf24';
    const textPrimary = isIvory ? '#1a1a1a' : '#ffffff';
    const textMuted = isIvory ? '#6b6b6b' : '#a8a29e';

    // Front face canvas
    const frontCanvas = document.createElement('canvas');
    frontCanvas.width = 1024;
    frontCanvas.height = 600;
    const ctx = frontCanvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createLinearGradient(0, 0, 1024, 600);
      grad.addColorStop(0, bgBase);
      grad.addColorStop(1, bgCard);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 600);

      // Accent border
      ctx.strokeStyle = accentHex;
      ctx.lineWidth = 4;
      ctx.strokeRect(30, 30, 964, 540);

      // Subtle pattern
      ctx.strokeStyle = isIvory ? 'rgba(4, 120, 87, 0.08)' : 'rgba(217, 119, 6, 0.1)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 1024; i += 40) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i + 100, 600);
        ctx.stroke();
      }

      // Smart Chip
      ctx.fillStyle = accentHex;
      ctx.fillRect(100, 240, 90, 70);
      ctx.strokeStyle = isIvory ? '#065f46' : '#78350f';
      ctx.lineWidth = 2;
      ctx.strokeRect(100, 240, 90, 70);
      ctx.beginPath();
      ctx.moveTo(100, 275); ctx.lineTo(190, 275);
      ctx.moveTo(145, 240); ctx.lineTo(145, 310);
      ctx.stroke();

      // Brand text
      ctx.fillStyle = accentHex;
      ctx.font = 'bold 42px serif';
      ctx.fillText('ZUMA ROYAL', 100, 130);

      ctx.fillStyle = textMuted;
      ctx.font = '22px sans-serif';
      ctx.fillText('ENTERPRISE RESIDENCES', 100, 170);

      ctx.fillStyle = textPrimary;
      ctx.font = '32px sans-serif';
      ctx.fillText(suiteName.toUpperCase(), 100, 440);

      ctx.fillStyle = accentLight;
      ctx.font = 'bold 20px sans-serif';
      ctx.fillText(tier, 100, 490);

      // NFC wave logo
      ctx.strokeStyle = accentHex;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(880, 275, 15, -Math.PI/3, Math.PI/3);
      ctx.arc(880, 275, 30, -Math.PI/3, Math.PI/3);
      ctx.arc(880, 275, 45, -Math.PI/3, Math.PI/3);
      ctx.stroke();
    }

    const frontTexture = new THREE.CanvasTexture(frontCanvas);
    const frontMat = new THREE.MeshStandardMaterial({ 
      map: frontTexture,
      metalness: 0.5,
      roughness: 0.3
    });

    // Back face
    const backCanvas = document.createElement('canvas');
    backCanvas.width = 1024;
    backCanvas.height = 600;
    const bCtx = backCanvas.getContext('2d');
    if (bCtx) {
      bCtx.fillStyle = bgCard;
      bCtx.fillRect(0, 0, 1024, 600);

      bCtx.fillStyle = isIvory ? '#1a1a1a' : '#000000';
      bCtx.fillRect(0, 80, 1024, 90);

      bCtx.fillStyle = isIvory ? '#ffffff' : '#ffffff';
      bCtx.fillRect(80, 240, 500, 60);

      bCtx.fillStyle = textMuted;
      bCtx.font = '18px sans-serif';
      bCtx.fillText('This card is the property of Zuma Royal Hotels & Resorts. If found, please return to any concierge.', 80, 360);
      bCtx.fillText('Abuja | Lagos | Calabar | Port Harcourt', 80, 400);

      bCtx.fillStyle = accentHex;
      bCtx.font = 'italic 28px serif';
      bCtx.fillText('Authorized Signature', 100, 280);
    }

    const backTexture = new THREE.CanvasTexture(backCanvas);
    const backMat = new THREE.MeshStandardMaterial({ 
      map: backTexture,
      metalness: 0.4,
      roughness: 0.5
    });

    const sideMat = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(accentHex), 
      metalness: 0.9, 
      roughness: 0.1 
    });

    const materials = [
      sideMat, sideMat, sideMat, sideMat, frontMat, backMat
    ];

    const cardMesh = new THREE.Mesh(cardGeom, materials);
    cardGroup.add(cardMesh);

    cardGroup.rotation.x = 0.15;
    cardGroup.rotation.y = -0.2;

    scene.add(cardGroup);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (cardGroupRef.current) {
        const time = Date.now() * 0.001;
        cardGroupRef.current.position.y = Math.sin(time) * 0.08;
      }
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!currentMount) return;
      const w = currentMount.clientWidth;
      const h = currentMount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      cardGeom.dispose();
      frontTexture.dispose();
      backTexture.dispose();
      frontMat.dispose();
      backMat.dispose();
      sideMat.dispose();

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [suiteName, tier, theme]);

  const handleFlip = () => {
    if (!cardGroupRef.current) return;
    const targetRotY = isFlipped ? -0.2 : Math.PI - 0.2;

    gsap.to(cardGroupRef.current.rotation, {
      y: targetRotY,
      duration: 1.2,
      ease: "power3.inOut"
    });

    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div 
        ref={mountRef} 
        onClick={handleFlip}
        className="w-full max-w-[400px] h-[250px] md:h-[280px] cursor-pointer"
        title="Click to flip premium access keycard"
      />
      <button
        onClick={handleFlip}
        className="mt-2 text-xs uppercase tracking-widest text-accent hover:text-accent-hover flex items-center gap-1.5 transition-colors font-semibold"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
        Interactive Keycard • Click to Flip
      </button>
    </div>
  );
};
