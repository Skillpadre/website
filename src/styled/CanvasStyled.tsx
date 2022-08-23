import React, {useState, useEffect, useRef} from "react";
import styled from '@emotion/styled';


import script from "../scripts/smoke2.js";

interface Props {
    mouseEnter: () => void;

}


 const CanvasStyled = React.memo(function CanvasSmoke({mouseEnter}: Props) {
    
    const ref = useRef<HTMLCanvasElement>(null);
    const [parentNode, setParentNode] = useState<HTMLOptionElement>();

  
    useEffect(() => {
        console.log(ref.current);
        if(null !== ref.current){
            console.log(ref.current.parentNode);
        }
    }, []);

    useEffect(() => {
            script();
    }, []);

    const Canvas = styled.canvas`
    cursor: none;
    width: 100%;
    height: 50vh;
    background: linear-gradient(to bottom, #010111 0%, #000000 100%);
    margin: 10px;
    `
    console.log('reloading canvas');

    
  return (
    <Canvas onMouseEnter={mouseEnter} ref={ref} id="canvas" ></Canvas>

  );
});

export default CanvasStyled;