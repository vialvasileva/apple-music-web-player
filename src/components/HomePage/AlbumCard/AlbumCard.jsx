import React, {useEffect, useRef, useState} from "react";
import {usePlayer} from "../../../context/PlayerStore";
import classes from "./AlbumCard.module.css";
import MenuButton from "./Menu/MenuButton";

const AlbumCard = ({imageUrl, title, artist}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        const handleClick = e => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => document.removeEventListener("mousedown", handleClick)
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
    }, [menuOpen]);

    const {setCurrentTrack} = usePlayer()


    return (
        <div className={`${classes.card} ${menuOpen ? classes.cardActive : ""}`}>
            <div className={classes.imageWrapper}>
                <img
                    src={imageUrl}
                    alt={title}
                    className={classes.image}
                />

                <div className={classes.overlay}/>

                <button
                    className={`${classes.playButton} ${classes.controlBtn}`}
                    onClick={(e) => {
                        e.stopPropagation()
                        setCurrentTrack({
                            title,
                            artist,
                            album: title,
                            image: imageUrl,
                        })
                    }}
                >
                    ▶
                </button>

                <div className={classes.moreButtonWrapper}>
                    <button
                        className={`${classes.moreButton} ${classes.controlBtn}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setMenuOpen(prev => !prev)
                        }}
                    >
                        •••
                    </button>
                </div>
            </div>

            <div className={classes.textBlock}>
                <div className={classes.title} title={title}>
                    {title}
                </div>

                <div className={classes.artist} title={artist}>
                    {artist}
                </div>
            </div>

            {menuOpen && (
                <div
                    className={classes.menuWrapper}
                    ref={menuRef}
                >
                    <MenuButton/>
                </div>
            )}
        </div>
    );
};

export default AlbumCard;
