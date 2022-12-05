import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        camera={{
            fov: 40,
            near: 0.5,
            far: 500,
            position: [-2, 1, 3.5]
        }}
    >
        <Experience />
    </Canvas>
)