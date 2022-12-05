import React, { useState } from 'react';
import { ContactShadows, Environment, Float, PresentationControls, Text } from '@react-three/drei';

import Mac from './models/Mac';
// import Cup from './models/Cup';
import Fox from './models/Fox';

export default function Experience() {

    const [showFox, setShowFox] = useState(false);


    function goToAnimation() {
        return setShowFox(true);
    }

    function hideAnimation() {
        return setShowFox(false);
    }

    return <>

        <Environment preset="city" />

        <color args={['#695b5b']} attach="background" />

        <ambientLight intensity={1} color="white" />

        <PresentationControls
            global
            rotation={[0.13, 0.1, 0]}
            polar={[- 0.4, 0.2]}
            azimuth={[- 1, 0.75]}
            config={{ mass: 2, tension: 300 }}
            snap={{ mass: 4, tension: 400 }}
        >
            <Float rotationIntensity={0.4}>
                <rectAreaLight
                    width={2.5}
                    height={1.65}
                    intensity={65}
                    color={'//#endregionA4BE7B'}
                    rotation={[0.1, Math.PI, 0]}
                    position={[0, 0.55, -1.15]}
                />
                <Mac scale={0.5} position={[-1, -0.5, 0]} rotation={[-0, 0.3, -0.2]} />
                {/* <Cup className="cup" position={[-0.4, -0.2, 0.4]} scale={0.3} rotation={[1.4, 0, 3]} /> */}
            </Float>
        </PresentationControls>

        <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.4}
            scale={5}
            blur={2.4}
        />
        <Float rotationIntensity={0.4}>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.15}
                letterSpacing={0.05}
                position={[1, 0.4, 0]}
                rotation={[0, -1.3, 0]}
                color="whitesmoke"
                scale={3}
            >
                Jorge Santamaria
            </Text>
            <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.07}
                letterSpacing={0.12}
                position={[1, 0, 0]}
                rotation={[0, -1.3, 0]}
                color="whitesmoke"
                scale={3}
            >
                frontend developer
            </Text>
            {!showFox && <Text
                font="./bangers-v20-latin-regular.woff"
                fontSize={0.03}
                letterSpacing={0.12}
                position={[1, -0.4, 0]}
                rotation={[0, -1.3, 0]}
                color="whitesmoke"
                scale={3}
                onClick={() => goToAnimation()}
            >
                See animation
            </Text>
            }
            {showFox &&
                <Text
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={0.03}
                    letterSpacing={0.12}
                    position={[1, -0.4, 0]}
                    rotation={[0, -1.3, 0]}
                    color="whitesmoke"
                    scale={3}
                    onClick={() => hideAnimation()}
                >
                    Hide animation
                </Text>
            }
        </Float>
        {showFox && <Fox scale={0.01} position={[1, -1.4, 0]} />}

    </>
};
