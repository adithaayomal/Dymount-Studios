import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model({ path }) {
    const { scene } = useGLTF(path);
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y -= delta * 0.2; // Clockwise rotation
        }
    });

    return <primitive object={scene} ref={ref} />;
}

const ModelViewer = ({ models }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const modelList = Array.isArray(models) ? models : [models];

    useEffect(() => {
        if (modelList.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % modelList.length);
        }, 60000);

        return () => clearInterval(interval);
    }, [modelList.length]);

    return (
        <div style={{ width: '100%', height: '100%', minHeight: '300px' }}>
            <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
                <Suspense fallback={null}>
                    <PresentationControls
                        speed={1.5}
                        global
                        zoom={0.5}
                        polar={[-0.1, Math.PI / 4]}
                        snap={true} // Reposition to default state after interaction
                    >
                        <Stage environment="city" intensity={0.6} contactShadow={false}>
                            <Model path={modelList[currentIndex]} />
                        </Stage>
                    </PresentationControls>
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ModelViewer;
