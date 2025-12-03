import React from 'react';
import SidebarItem from "../Item/SidebarItem";
import classes from "./SidebarHeader.module.css"
import SidebarSearch from "./Search/SidebarSearch";

const SidebarHeader = () => {
    return (
        <div className={classes.sidebarHeader}>
            <SidebarItem
                icon="/icons/apple-logo.png"
                label="Music"
                onClick={() => console.log("apple-music")}
                mode="header"
            />
            <SidebarSearch/>
        </div>
    );
};

export default SidebarHeader;