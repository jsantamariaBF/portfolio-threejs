import { useGLTF } from '@react-three/drei';
import React from 'react';

const Cup = (props) => {
    const cup = useGLTF('./cup-model.gltf');

    return (
        <primitive {...props} object={cup.scene} />
    )
};

export default Cup