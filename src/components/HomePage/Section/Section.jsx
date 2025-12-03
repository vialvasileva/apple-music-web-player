import React, {useEffect, useState} from 'react';
import classes from "./Section.module.css"
import SectionHeader from "./Header/SectionHeader";
import SectionContent from "./Content/SectionContent";
import {getArtistTopAlbumArtwork, searchItunes} from "../../../API/iTunes";

const Section = ({title, subtitle, searchTerm, entity, enableAvatar=true}) => {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await searchItunes(searchTerm, entity)
                setItems(data.results)
            } catch (e) {
                console.error("Section fetching error: ", e)
            } finally {
                setLoading(false)
            }
        }

        void fetchData()
    }, [searchTerm, entity]);

    useEffect(() => {
        if (!enableAvatar) return;

        const loadAvatar = async () => {
            const url = await getArtistTopAlbumArtwork(title)
            setAvatar(url)
        }

        void loadAvatar()
    }, [title, enableAvatar])

    return (
        <div className={classes.section}>
            <SectionHeader
                title={title}
                subtitle={subtitle}
                avatar={enableAvatar ? (avatar) : null}
            />

            <SectionContent
                items={items}
                loading={loading}
            />
        </div>
    );
};

export default Section;