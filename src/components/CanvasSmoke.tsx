import React, {useState, useEffect} from "react";

import styles from "../../styles/Projects.module.css";

import script from "../scripts/smoke.js";

// interface Props {
//     handleMouseEnterParent: () => void;

// }


 const Canvas = React.memo(function CanvasSmoke() {



    console.log('reloading canvas');

    
  return (
    <canvas   id="canvas" style={{cursor: 'none', width: "100%", height: "50vh", background: "linear-gradient(to bottom, #010111 0%, #000000 100%)"}}></canvas>

  );
});

export default Canvas;