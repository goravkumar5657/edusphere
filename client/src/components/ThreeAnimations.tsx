import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    THREE: any;
  }
}

interface ThreeAnimationsProps {
  type: 'solar-system' | 'molecule' | 'geometry' | 'physics';
}

const ThreeAnimations = ({ type }: ThreeAnimationsProps) => {
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

    let animationObjects: any[] = [];
    let animationId: number;

    const createSolarSystem = () => {
      // Sun
      const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
      const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
      const sun = new THREE.Mesh(sunGeometry, sunMaterial);
      scene.add(sun);
      animationObjects.push({ mesh: sun, type: 'sun' });

      // Planets
      const planetData = [
        { name: 'Mercury', distance: 2, size: 0.2, color: 0x8c7853, speed: 0.04 },
        { name: 'Venus', distance: 3, size: 0.3, color: 0xffc649, speed: 0.03 },
        { name: 'Earth', distance: 4, size: 0.35, color: 0x6b93d6, speed: 0.02 },
        { name: 'Mars', distance: 5, size: 0.25, color: 0xc1440e, speed: 0.015 }
      ];

      planetData.forEach((planet, index) => {
        const geometry = new THREE.SphereGeometry(planet.size, 16, 16);
        const material = new THREE.MeshBasicMaterial({ color: planet.color });
        const mesh = new THREE.Mesh(geometry, material);
        
        mesh.position.x = planet.distance;
        scene.add(mesh);
        
        animationObjects.push({
          mesh,
          type: 'planet',
          distance: planet.distance,
          speed: planet.speed,
          angle: index * 0.5
        });

        // Orbit line
        const orbitGeometry = new THREE.RingGeometry(planet.distance - 0.05, planet.distance + 0.05, 64);
        const orbitMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x555555, 
          transparent: true, 
          opacity: 0.3,
          side: THREE.DoubleSide
        });
        const orbit = new THREE.Mesh(orbitGeometry, orbitMaterial);
        orbit.rotation.x = Math.PI / 2;
        scene.add(orbit);
      });

      camera.position.z = 12;
    };

    const createMolecule = () => {
      // Water molecule (H2O)
      const oxygenGeometry = new THREE.SphereGeometry(0.5, 16, 16);
      const oxygenMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
      const oxygen = new THREE.Mesh(oxygenGeometry, oxygenMaterial);
      scene.add(oxygen);
      animationObjects.push({ mesh: oxygen, type: 'oxygen' });

      // Hydrogen atoms
      const hydrogenGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const hydrogenMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
      
      const hydrogen1 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
      hydrogen1.position.set(1.2, 0.8, 0);
      scene.add(hydrogen1);
      animationObjects.push({ mesh: hydrogen1, type: 'hydrogen1' });

      const hydrogen2 = new THREE.Mesh(hydrogenGeometry, hydrogenMaterial);
      hydrogen2.position.set(1.2, -0.8, 0);
      scene.add(hydrogen2);
      animationObjects.push({ mesh: hydrogen2, type: 'hydrogen2' });

      // Bonds
      const bondGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1.5);
      const bondMaterial = new THREE.MeshBasicMaterial({ color: 0x888888 });
      
      const bond1 = new THREE.Mesh(bondGeometry, bondMaterial);
      bond1.position.set(0.6, 0.4, 0);
      bond1.rotation.z = -Math.PI / 4;
      scene.add(bond1);

      const bond2 = new THREE.Mesh(bondGeometry, bondMaterial);
      bond2.position.set(0.6, -0.4, 0);
      bond2.rotation.z = Math.PI / 4;
      scene.add(bond2);

      camera.position.z = 5;
    };

    const createGeometry = () => {
      // Various geometric shapes
      const shapes = [
        { geometry: new THREE.BoxGeometry(1, 1, 1), color: 0x00ff00, position: [-3, 0, 0] },
        { geometry: new THREE.SphereGeometry(0.7, 16, 16), color: 0x0000ff, position: [0, 0, 0] },
        { geometry: new THREE.ConeGeometry(0.7, 1.5, 8), color: 0xff0000, position: [3, 0, 0] },
        { geometry: new THREE.OctahedronGeometry(0.8), color: 0xffff00, position: [0, 2, 0] },
        { geometry: new THREE.TorusGeometry(0.6, 0.3, 8, 16), color: 0xff00ff, position: [0, -2, 0] }
      ];

      shapes.forEach((shape, index) => {
        const material = new THREE.MeshBasicMaterial({ 
          color: shape.color,
          wireframe: false,
          transparent: true,
          opacity: 0.8
        });
        const mesh = new THREE.Mesh(shape.geometry, material);
        mesh.position.set(...shape.position);
        scene.add(mesh);
        animationObjects.push({ 
          mesh, 
          type: 'geometry', 
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
          }
        });
      });

      camera.position.z = 8;
    };

    const createPhysics = () => {
      // Pendulum simulation
      const pivotGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const pivotMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
      const pivot = new THREE.Mesh(pivotGeometry, pivotMaterial);
      pivot.position.set(0, 3, 0);
      scene.add(pivot);

      const bobGeometry = new THREE.SphereGeometry(0.3, 16, 16);
      const bobMaterial = new THREE.MeshBasicMaterial({ color: 0xff6b6b });
      const bob = new THREE.Mesh(bobGeometry, bobMaterial);
      scene.add(bob);

      const stringGeometry = new THREE.CylinderGeometry(0.02, 0.02, 3);
      const stringMaterial = new THREE.MeshBasicMaterial({ color: 0x666666 });
      const string = new THREE.Mesh(stringGeometry, stringMaterial);
      scene.add(string);

      animationObjects.push({ 
        mesh: bob, 
        string: string,
        type: 'pendulum', 
        angle: Math.PI / 4,
        angleVelocity: 0,
        length: 3
      });

      camera.position.z = 6;
    };

    // Initialize based on type
    switch (type) {
      case 'solar-system':
        createSolarSystem();
        break;
      case 'molecule':
        createMolecule();
        break;
      case 'geometry':
        createGeometry();
        break;
      case 'physics':
        createPhysics();
        break;
    }

    let time = 0;

    // Animation loop
    function animate() {
      animationId = requestAnimationFrame(animate);
      time += 0.01;

      animationObjects.forEach((obj) => {
        switch (obj.type) {
          case 'sun':
            obj.mesh.rotation.y += 0.01;
            break;
          case 'planet':
            obj.angle += obj.speed;
            obj.mesh.position.x = Math.cos(obj.angle) * obj.distance;
            obj.mesh.position.z = Math.sin(obj.angle) * obj.distance;
            obj.mesh.rotation.y += 0.02;
            break;
          case 'oxygen':
          case 'hydrogen1':
          case 'hydrogen2':
            obj.mesh.rotation.y += 0.01;
            break;
          case 'geometry':
            obj.mesh.rotation.x += obj.rotationSpeed.x;
            obj.mesh.rotation.y += obj.rotationSpeed.y;
            obj.mesh.rotation.z += obj.rotationSpeed.z;
            break;
          case 'pendulum':
            // Simple pendulum physics
            const gravity = 0.001;
            const friction = 0.999;
            obj.angleVelocity += (-gravity / obj.length) * Math.sin(obj.angle);
            obj.angleVelocity *= friction;
            obj.angle += obj.angleVelocity;
            
            obj.mesh.position.x = Math.sin(obj.angle) * obj.length;
            obj.mesh.position.y = 3 - Math.cos(obj.angle) * obj.length;
            
            obj.string.position.x = obj.mesh.position.x / 2;
            obj.string.position.y = 3 - obj.length / 2;
            obj.string.rotation.z = obj.angle;
            break;
        }
      });

      renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    function handleResize() {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
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
  }, [type]);

  return <div ref={containerRef} className="w-full h-full" />;
};

export default ThreeAnimations;
