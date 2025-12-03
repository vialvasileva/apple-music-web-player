import React from 'react';
import classes from "./Sidebar.module.css";
import SidebarNavGroup from "./Navigation/SidebarNavGroup";
import {libraryItems, mainItems, playlistsItems} from "./Navigation/SidebarData";
import SidebarFooter from "./Footer/SidebarFooter";
import SidebarHeader from "./Header/SidebarHeader";

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <SidebarHeader/>
            <div className={classes.scrollArea}>
                <SidebarNavGroup
                    items={mainItems}
                />
                <SidebarNavGroup
                    title="Library"
                    items={libraryItems}
                />
                <SidebarNavGroup
                    title="Playlists"
                    items={playlistsItems}
                />
            </div>
            <SidebarFooter/>
        </div>
    );
};

export default Sidebar;