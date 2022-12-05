import React, { useEffect } from 'react';
import { useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from 'leva';

const Fox = (props) => {
    const fox = useGLTF('./Fox.glb');
    const animations = useAnimations(fox.animations, fox.scene);

    const { animationName } = useControls({
        animationName: {
            options: animations.names,
        },
    });


    useEffect(() => {
        const action = animations.actions[animationName];
        action
            .reset()
            .fadeIn(0.5)
            .play();

        return () => {
            action.fadeOut(0.5);
        }
    }, [animationName]);



    return (
        <primitive {...props} object={fox.scene} />
    )
};

export default Fox;