import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useHotel } from '../context/HotelContext';

export const ThreeHeroSculpture: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { theme } = useHotel();

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, theme === 'ivory' ? 0.8 : 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(
      theme === 'ivory' ? 0x047857 : 0xf59e0b, // emerald or amber
      2.5
    );
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(
      theme === 'ivory' ? 0xfdbba7 : 0x38bdf8, // soft coral or blue
      1
    );
    fillLight.position.set(-5, -2, 2);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(
      theme === 'ivory' ? 0x047857 : 0xd97706,
      3, 10
    );
    rimLight.position.set(0, -3, -1);
    scene.add(rimLight);

    // Crystal Group
    const crystalGroup = new THREE.Group();

    const coreGeom = new THREE.OctahedronGeometry(1.6, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: theme === 'ivory' ? 0xf5f4ef : 0x1c1917,
      metalness: theme === 'ivory' ? 0.5 : 0.9,
      roughness: 0.1,
      transmission: 0.4,
      thickness: 1.2,
      envMapIntensity: 1.5,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    crystalGroup.add(coreMesh);

    const cageGeom = new THREE.IcosahedronGeometry(2.1, 1);
    const cageMat = new THREE.MeshStandardMaterial({
      color: theme === 'ivory' ? 0x047857 : 0xf59e0b, // emerald or amber wireframe
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true
    });
    const cageMesh = new THREE.Mesh(cageGeom, cageMat);
    crystalGroup.add(cageMesh);

    const innerGeom = new THREE.SphereGeometry(0.6, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color: theme === 'ivory' ? 0x047857 : 0xd97706
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    crystalGroup.add(innerMesh);

    scene.add(crystalGroup);

    // Particles
    const particleCount = 150;
    const particleGeom = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 10;
      particlePos[i + 1] = (Math.random() - 0.5) * 10;
      particlePos[i + 2] = (Math.random() - 0.5) * 10;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      color: theme === 'ivory' ? 0x047857 : 0xfbd38d,
      size: 0.04,
      transparent: true,
      opacity: theme === 'ivory' ? 0.45 : 0.6
    });
    const particleField = new THREE.Points(particleGeom, particleMat);
    scene.add(particleField);

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      crystalGroup.rotation.y = elapsedTime * 0.2;
      crystalGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2;

      crystalGroup.position.x += (mouseX * 0.8 - crystalGroup.position.x) * 0.05;
      crystalGroup.position.y += (mouseY * 0.8 - crystalGroup.position.y) * 0.05;

      particleField.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    gsap.fromTo(crystalGroup.scale, 
      { x: 0, y: 0, z: 0 }, 
      { x: 1, y: 1, z: 1, duration: 1.8, ease: "power3.out" }
    );

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
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      coreGeom.dispose(); coreMat.dispose();
      cageGeom.dispose(); cageMat.dispose();
      innerGeom.dispose(); innerMat.dispose();
      particleGeom.dispose(); particleMat.dispose();

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div 
      ref={mountRef} 
      className="w-full h-[380px] md:h-[500px] lg:h-[600px] relative cursor-grab active:cursor-grabbing"
      title="Interactive 3D Luxury Sculpture - Drag and explore"
    />
  );
};
