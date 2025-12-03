import React from 'react';
import classes from "./SectionHeader.module.css";

const SectionHeader = ({title, subtitle, avatar}) => {
    return (
        <div className={classes.header}>
            {avatar && (
                <img
                    src={avatar}
                    className={classes.avatar}
                    alt=""
                />
            )}

            <div className={classes.headerText}>
                {subtitle && (
                    <div className={classes.subtitle}>{subtitle}</div>
                )}

                <div className={classes.titleRow}>
                    <h2 className={classes.title}>{title}</h2>
                    <div className={classes.arrow}>›</div>
                </div>
            </div>

        </div>
    );
};

export default SectionHeader;