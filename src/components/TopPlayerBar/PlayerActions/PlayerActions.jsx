import React from "react";
import classes from "./PlayerActions.module.css";

const PlayerActions = () => {
    return (
        <div className={classes.actions}>
            <button>
                <img
                    src="icons/lyrics.png"
                    className={classes.lyrics}
                    alt=""
                    aria-hidden={true}
                />
            </button>
            <button>
                <img
                    src="icons/queue.png"
                    className={classes.queue}
                    alt=""
                    aria-hidden={true}
                />
            </button>
            <button>
                <img
                    src="icons/account.png"
                    className={classes.account}
                    alt=""
                    aria-hidden={true}
                />
            </button>
        </div>
    );
};

export default PlayerActions;
