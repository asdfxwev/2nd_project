
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export default function topBtn() {
    const [bottomOffset, setBottomOffset] = useState(30);

    function scrollTop() {
        scrollTo(0, 0);
    }

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('.footer');
            if (!footer) return;
            const footerRect = footer.getBoundingClientRect();

            if (footer && window.scrollY > window.innerHeight * 0.5) {
                if (isDetailPage) {
                    setShowButton(false);
                } else {
                    setShowButton(true);
                }
            } else {
                setShowButton(false);
            }

            if (footer) {
                if (window.innerHeight - footerRect.top > 0) {
                    setBottomOffset(window.innerHeight - footerRect.top);
                } else {
                    setBottomOffset(20);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoginPage]);

    return (
        <>
            <Canvas
                style={{ height: '150px', width: '150px', cursor: 'pointer', bottom: `${bottomOffset}px` }}
                className='topBtn'
                onClick={() => scrollTop()}
            >
                <ambientLight intensity={2} />
                <spotLight position={[10, 10, 10]} angle={15} penumbra={1} />
                <React.Suspense fallback={null}>
                    <Model />
                </React.Suspense>
                <OrbitControls
                    autoRotate
                    // ref={orbitControlsRef}
                    enableZoom={false}
                    enablePan={false}
                    minPolarAngle={Math.PI / 4}
                    maxPolarAngle={Math.PI / 2}
                    target={[0, 2, 0]}
                />
            </Canvas>
        </>
    )
}