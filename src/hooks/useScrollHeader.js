import { useEffect, useState, useCallback } from "react";

const useScrollHeader = () => {
    const [blackHeader, setBlackHeader] = useState(false);

    const scrollListener = useCallback(() => {
        if (window.scrollY > 10) {
            setBlackHeader(true);
        } else {
            setBlackHeader(false);
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', scrollListener);
        return () => {
            window.removeEventListener('scroll', scrollListener);
        };
    }, [scrollListener]);

    return blackHeader;
};

export default useScrollHeader;
