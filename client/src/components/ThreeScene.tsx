import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === 'undefined' || !window.THREE) {
      return;
    }

    const container = containerRef.current;
    const THREE = window.THREE;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);
    
    // Create floating educational elements
    const elements: any[] = [];
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.ConeGeometry(0.3, 0.6, 8),
      new THREE.OctahedronGeometry(0.4)
    ];
    
    const colors = [0x2563EB, 0x059669, 0xDC2626, 0x7C3AED, 0xEA580C];
    
    // Create floating elements
    for (let i = 0; i < 15; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({ 
        color: colors[Math.floor(Math.random() * colors.length)],
        transparent: true,
        opacity: 0.7
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.x = (Math.random() - 0.5) * 20;
      mesh.position.y = (Math.random() - 0.5) * 10;
      mesh.position.z = (Math.random() - 0.5) * 10;
      
      mesh.rotation.x = Math.random() * Math.PI;
      mesh.rotation.y = Math.random() * Math.PI;
      
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: Math.random() * 0.01 + 0.005,
        floatOffset: Math.random() * Math.PI * 2
      };
      
      elements.push(mesh);
      scene.add(mesh);
    }
    
    camera.position.z = 8;
    
    let time = 0;
    let animationId: number;
    
    // Animation loop
    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.01;
      
      elements.forEach((element) => {
        // Rotation animation
        element.rotation.x += element.userData.rotationSpeed.x;
        element.rotation.y += element.userData.rotationSpeed.y;
        element.rotation.z += element.userData.rotationSpeed.z;
        
        // Floating animation
        element.position.y += Math.sin(time + element.userData.floatOffset) * element.userData.floatSpeed;
      });
      
      renderer.render(scene, camera);
    }
    
    animate();
    
    // Handle resize
    function handleResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0" />;
};

export default ThreeScene;
