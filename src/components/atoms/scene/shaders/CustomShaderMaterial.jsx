import { Center, Float, Text, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";
import OrbitronFont from "../fonts/Orbitron_Regular.json";

const vertexShader = `
  varying vec2 vUv;
  varying float vDelay;
  varying vec3 vPosition;
  varying vec4 vgl_Position;
  // Simple hash function based on UV
  float random(vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }

  void main() {
    vUv = uv;
    vPosition = position;
    vDelay = random(position.xz); // gives each vertex a pseudo-random delay

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vgl_Position = gl_Position;
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vDelay;
  uniform float uTime;
  varying vec3 vPosition;
  varying vec4 vgl_Position;

  vec4 permute(vec4 x)
  {
      return mod(((x*34.0)+1.0)*x, 289.0);
  }
  vec2 fade(vec2 t)
  {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
  }

  float cnoise(vec2 P)
  {
      vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
      vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
      Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
      vec4 ix = Pi.xzxz;
      vec4 iy = Pi.yyww;
      vec4 fx = Pf.xzxz;
      vec4 fy = Pf.yyww;
      vec4 i = permute(permute(ix) + iy);
      vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
      vec4 gy = abs(gx) - 0.5;
      vec4 tx = floor(gx + 0.5);
      gx = gx - tx;
      vec2 g00 = vec2(gx.x,gy.x);
      vec2 g10 = vec2(gx.y,gy.y);
      vec2 g01 = vec2(gx.z,gy.z);
      vec2 g11 = vec2(gx.w,gy.w);
      vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
      g00 *= norm.x;
      g01 *= norm.y;
      g10 *= norm.z;
      g11 *= norm.w;
      float n00 = dot(g00, vec2(fx.x, fy.x));
      float n10 = dot(g10, vec2(fx.y, fy.y));
      float n01 = dot(g01, vec2(fx.z, fy.z));
      float n11 = dot(g11, vec2(fx.w, fy.w));
      vec2 fade_xy = fade(Pf.xy);
      vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
      float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
      return 2.3 * n_xy;
  }

  void main() {
    float noise = (cnoise(vPosition.xz) + 2.0)/2.0;
    float noise2 = (cnoise(vPosition.xy) + 2.0)/2.0;
    float noise3 = (cnoise(vPosition.yz) + 2.0)/2.0;
    float appearTime = noise * 15.0;
    float noiseColor = cnoise(vec2(appearTime,vPosition.z*vDelay));
    float alpha = smoothstep(0.0, 1.0, ((uTime +  (vPosition.z/200.0 * -1.0)) * noise * noise2 * noise3) - 1.0   ); 
    

    vec3 color = vec3(vgl_Position.w/200.0,0.55*vgl_Position.w/200.0,vgl_Position.w/200.0); // UV gradient for fun
    gl_FragColor = vec4(color, alpha);
  }
`;
//+ (vPosition.z / 500.0 * -1.0))
// uTime/10.0 + (vPosition.z / 500.0 * -1.0)
export default function CustomShaderMaterial({ turnOn }) {
  const materialRef = useRef();
  const startTimeRef = useRef(null);

  useFrame(({ clock }) => {
    if (turnOn) {
      if (startTimeRef.current === null) {
        startTimeRef.current = clock.getElapsedTime(); // record the activation time
      }

      const elapsed = clock.getElapsedTime() - startTimeRef.current;
      materialRef.current.uniforms.uTime.value = elapsed;
    } else {
      startTimeRef.current = null; // reset when turned off (optional)
    }
  });

  const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true,
    uniforms: {
      uTime: { value: 0 },
    },
    side: THREE.DoubleSide,
  });

  return (
    <primitive object={shaderMaterial} attach="material" ref={materialRef} />
  );
}
