import React from "react";
import classes from "./TrackVolume.module.css";

const PlayerVolume = () => {
    return (
        <div className={classes.volume}>
            <img
                src="/icons/volume.png"
                className={classes.icon}
                alt=""
                aria-hidden={true}
            />
            <input
                className={classes.range}
                type="range"
                min="0"
                max="100"
                defaultValue="80" />
        </div>
    );
};

export default PlayerVolume;
