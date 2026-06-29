"use client";

import {
  canvasContainerStyle,
  containerStyle,
} from "@/components/particleEffect/particleEffect.css";
import { useEffect, useRef } from "react";
import * as THREE from "three";

interface ParticleEffectProps {
  isEnabled?: boolean;
}

export default function ParticleEffect({ isEnabled = true }: ParticleEffectProps) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<{
    particles: THREE.Points<THREE.BufferGeometry, THREE.ShaderMaterial>;
    positions: Float32Array;
    velocities: Float32Array;
    geometry: THREE.BufferGeometry;
    material: THREE.ShaderMaterial;
  } | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mount = mountRef.current;
    if (!isEnabled || !mount) return;

    // シーンの初期化
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000,
    );

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch (error) {
      console.error("Failed to create WebGL context", error);
      return;
    }

    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // 透明背景

    mount.appendChild(renderer.domElement);

    // オーブ状の粒子を作成
    const particleCount = 32;
    const positions = new Float32Array(particleCount * 3);
    const velocities = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const phases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 15;
      positions[i3 + 1] = (Math.random() - 0.5) * 15;
      positions[i3 + 2] = (Math.random() - 0.5) * 15;

      velocities[i3] = (Math.random() - 0.5) * 0.001;
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.001;
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.001;

      const tint = Math.random();
      colors[i3] = 0.99 + tint * 0.01;
      colors[i3 + 1] = 0.98 + tint * 0.02;
      colors[i3 + 2] = 1.0;

      sizes[i] = Math.random() * 0.14 + 0.12;
      phases[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute("phase", new THREE.BufferAttribute(phases, 1));

    const vertexShader = `
      attribute float size;
      attribute float phase;
      uniform float uTime;
      varying vec3 vColor;
      varying float vPhase;
      
      void main() {
        vColor = color;
        vPhase = phase;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        float pulse = 0.99 + 0.01 * sin(uTime * 0.8 + phase);
        gl_PointSize = size * pulse * (320.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vPhase;
      uniform float uTime;
      
      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float radial = length(coord);
        
        // ポイントスプライトの四角い角を円形マスクで消す
        float mask = 1.0 - smoothstep(0.4, 0.49, radial);
        if (mask < 0.001) discard;
        
        float dist = radial * 2.0;
        float falloff = exp(-dist * dist * 1.1);
        
        float shimmer = 0.98 + 0.02 * sin(uTime * 1.2 + vPhase);
        
        // 色は中心からフチまで白を保ち、透明度だけでソフトに消える
        vec3 color = vec3(1.0) * shimmer;
        float alpha = falloff * mask * 0.32;
        if (alpha < 0.008) discard;
        
        gl_FragColor = vec4(color, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
      },
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
      vertexColors: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 8;

    // 参照を保存
    sceneRef.current = scene;
    rendererRef.current = renderer;
    particlesRef.current = {
      particles,
      positions,
      velocities,
      geometry,
      material,
    };

    // マウスイベント
    interface MouseEventWithClient extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (event: MouseEventWithClient) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // リサイズ処理
    const handleResize = () => {
      if (!mount) return;

      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // アニメーションループ
    const animate = () => {
      requestAnimationFrame(animate);

      material.uniforms.uTime.value = performance.now() * 0.001;

      if (particlesRef.current) {
        const { positions, velocities, geometry } = particlesRef.current;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          // 粒子の移動
          positions[i3] += velocities[i3];
          positions[i3 + 1] += velocities[i3 + 1];
          positions[i3 + 2] += velocities[i3 + 2];

          // マウスの影響を追加
          const mouseInfluence = 0.001;
          positions[i3] += mouseRef.current.x * mouseInfluence;
          positions[i3 + 1] += mouseRef.current.y * mouseInfluence;

          // 境界での反射
          if (Math.abs(positions[i3]) > 8) velocities[i3] *= -1;
          if (Math.abs(positions[i3 + 1]) > 8) velocities[i3 + 1] *= -1;
          if (Math.abs(positions[i3 + 2]) > 8) velocities[i3 + 2] *= -1;
        }

        geometry.attributes.position.needsUpdate = true;
      }

      // カメラを少し回転
      camera.position.x = Math.sin(Date.now() * 0.0001) * 0.5;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 0.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // クリーンアップ
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }

      if (geometry) geometry.dispose();
      if (material) material.dispose();
      if (renderer) renderer.dispose();
    };
  }, [isEnabled]);

  if (!isEnabled) return null;

  return (
    <div className={containerStyle}>
      <div ref={mountRef} className={canvasContainerStyle} />
    </div>
  );
}
