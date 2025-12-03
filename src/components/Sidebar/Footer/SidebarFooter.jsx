import React from 'react';
import SidebarItem from "../Item/SidebarItem";
import classes from "./SidebarFooter.module.css"

const SidebarFooter = () => {
    return (
        <div className={classes.sidebarFooter}>
            <SidebarItem
                icon="/icons/open-in-music.png"
                label="Open in Music ↗"
                onClick={() => console.log("open-in-music")}
                mode="footer"
            />
            <SidebarItem
                label="Try Beta ↗"
                onClick={() => console.log("try-beta")}
                mode="footer"
            />
        </div>
    );
};

export default SidebarFooter;