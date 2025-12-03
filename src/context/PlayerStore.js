import { createContext, useContext, useState } from "react";

const PlayerContext = createContext(null);
export const usePlayer = () => useContext(PlayerContext);

export const PlayerProvider = ({children}) => {
    const [currentTrack, setCurrentTrack] = useState(null);

    return (
        <PlayerContext.Provider value={{currentTrack, setCurrentTrack}}>
            {children}
        </PlayerContext.Provider>
    );
};
