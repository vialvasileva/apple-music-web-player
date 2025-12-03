import React from 'react';
import classes from "./SectionContent.module.css";
import AlbumCard from "../../AlbumCard/AlbumCard";


const SectionContent = ({items, loading}) => {
    return (
        <div className={classes.scrollRow}>
            {loading
                ? (<div className={classes.loading}>Loading...</div>)
                : (items.map((item) => (
                    <AlbumCard
                        key={item.collectionId}
                        title={item.collectionName}
                        artist={item.artistName}
                        imageUrl={item.artworkUrl100?.replace("100x100", "300x300")}
                    />
                ))
            )}
        </div>
    );
};

export default SectionContent;