import React from 'react';
import classes from "./MenuButton.module.css"

const MenuButton = () => {
    return (
        <div className={classes.menu}>
            <div className={classes.menuItem}>Share</div>
            <div className={classes.menuItem}>Copy Link</div>
            <div className={classes.menuItem}>Copy Embed Code</div>
        </div>
    );
};

export default MenuButton;