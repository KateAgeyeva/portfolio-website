import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1000 });

    return isDesktop ? children : null;
}

export const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 999 });

    return isMobile ? children : null;
}