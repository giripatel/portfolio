import { useState, useEffect } from "react";

const useWindowDimensions = () => {
    const [width, setWidth] = useState<number | undefined>(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        setWidth(window.innerWidth);

        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
};

export default useWindowDimensions;