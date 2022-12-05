import React from 'react';
import { useGLTF, Html } from '@react-three/drei';

const Mac = (props) => {
    const mac = useGLTF('./mac-model.gltf');

    return (
        <primitive {...props} object={mac.scene}>
            <Html
                wrapperClass='htmlScreen'
                transform
                distanceFactor={2.6}
                position={[0, 1.51, -1.4]}
                rotation-x={-0.226}
            >
                <iframe src="https://jorgesantamaria.web.app/" width={450} height={285} />
            </Html>
        </primitive>
    )
}

export default Mac;