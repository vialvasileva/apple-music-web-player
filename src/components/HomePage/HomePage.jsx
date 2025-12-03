import React from 'react';
import classes from "./HomePage.module.css";
import Section from "./Section/Section"

const HomePage = () => {
    return (
        <div className={classes.content}>
            <h1 className={classes.pageTitle}>Home</h1>

            <Section
                title="Recently Played"
                searchTerm="soft blade"
                entity="album"
                enableAvatar={false}

            />

            <Section
                title="Aphex Twin"
                subtitle="More From"
                searchTerm="Aphex Twin"
                entity="album"
                enableAvatar={true}
            />

            <Section
                title="Electronic"
                searchTerm="Electronic"
                entity="album"
                enableAvatar={false}
            />

        </div>
    );
};

export default HomePage;