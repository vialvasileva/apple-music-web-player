import React from 'react';
import classes from "./SidebarNavGroup.module.css";
import SidebarItem from "../Item/SidebarItem";

const SidebarNavGroup = ({title, items}) => {
    return (
        <div className={classes.navGroup}>
            {title && (
                <div className={classes.navGroupTitle}>
                    {title}
                </div>
            )}

            <ul className={classes.navGroupList}>
                {items.map((item, index) => (
                    <li key={index}>
                        <SidebarItem
                            icon={item.icon}
                            label={item.label}
                            onClick={item.onClick}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarNavGroup;