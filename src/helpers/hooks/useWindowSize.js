import { useState, useEffect } from 'react';

const useWindowSize = () => {
    const isClient = typeof window === 'object'

    function getSize() {
        return {
            width: isClient ? window.innerWidth : undefined,
            height: isClient ? window.innerHeight : undefined
        }
    }

    const [windowSize, setWindowSize] = useState(getSize)

    useEffect(() => {
        if (!isClient) {
            return false
        }
        function handleResize() {
            setWindowSize(getSize())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
        // eslint-disable-next-line
    }, [])

    return windowSize
}

export default useWindowSize;
