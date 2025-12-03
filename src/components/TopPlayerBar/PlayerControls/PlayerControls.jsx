import React from "react";
import classes from "./PlayerControls.module.css";

const PlayerControls = () => {
    return (
        <div className={classes.controls}>
            <button>⇄</button>
            <button>⏮</button>
            <button>▶</button>
            <button>⏭</button>
            <button>↺</button>
        </div>
    );
};

export default PlayerControls;
