import React from 'react';
import classes from "./SidebarItem.module.css";

const SidebarItem = ({icon, label, onClick, mode="default"}) => {
    return (
        <button
            className={classes.sidebarItem + " " + classes[mode]}
            onClick={onClick}
        >
            {icon && (
                <img
                    src={icon}
                    className={classes.icon + " " + classes[mode]}
                    alt=""
                    aria-hidden="true"
                />
            )}
            <span>
                {label}
            </span>
        </button>
    );
};

export default SidebarItem;