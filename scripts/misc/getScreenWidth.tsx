import { useState, useEffect } from "react";

const getScreenWidth = () => {
    const[width, setWidth] = useState(1200);

    useEffect(() => {
        if(process.browser){
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
    })
    
    return width;
}

export default getScreenWidth;