import React from 'react';
import { usePlayer } from "../../context/PlayerStore";
import Controls from "./PlayerControls/PlayerControls";
import TrackInfo from "./TrackInfo/TrackInfo";
import Volume from "./TrackVolume/TrackVolume";
import Actions from "./PlayerActions/PlayerActions";
import classes from "./TopPlayerBar.module.css"

const TopPlayerBar = () => {
    const {currentTrack} = usePlayer()

    return (
        <div className={classes.topbar}>
            <Controls/>
            <TrackInfo track={currentTrack}/>
            <Volume/>
            <Actions/>
        </div>
    );
};

export default TopPlayerBar;