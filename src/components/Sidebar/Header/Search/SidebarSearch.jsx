import React, {useEffect, useRef, useState} from 'react'
import classes from "./SidebarSearch.module.css"

const mockSuggestions = [
    "Drake",
    "Lana Del Rey",
    "Taylor Swift",
    "Billie Eilish",
    "Jack Harlow",
    "Metro Boomin",
    "The Weeknd",
    "Kendrick Lamar",
    "Arctic Monkeys",
]

const SidebarSearch = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [filtered, setFiltered] = useState([])
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(false)

    const wrapperRef = useRef(null)

    useEffect(() => {
        const handler = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false)
                setActive(false)
            }
        }
        document.addEventListener("click", handler)
        return () => document.removeEventListener("click", handler)
    }, [])

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') {
                setOpen(false)
                setActive(false)
            }
        }
        document.addEventListener("keydown", onKey)
        return () => document.removeEventListener("keydown", onKey)
    }, [])

    const handleChange = (e) => {
        const value = e.target.value
        setSearchQuery(value)

        if (value.trim().length === 0) {
            setFiltered([])
            setOpen(false)
            return
        }

        const suggestions = mockSuggestions.filter((item) =>
            item.toLowerCase().includes(value.toLowerCase())
        )

        setFiltered(suggestions)
        setOpen(true)
    }

    const clearInput = () => {
        setSearchQuery("");
        setFiltered([])
        setOpen(false)
    }

    return (
        <div ref={wrapperRef} className={classes.searchWrapper + " " + (open ? classes.active : "")}>
            <div
                className={classes.inputContainer}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <input
                    type="text"
                    value={searchQuery}
                    placeholder="Search"
                    onChange={handleChange}
                    onFocus={() => setActive(true)}
                    className={classes.input}
                />

                {(hover || active) && searchQuery.length > 0 && (
                    <button className={classes.clearInputBtn} onClick={clearInput}>
                        ×
                    </button>
                )}

                {open && (
                    <div className={classes.dropdown}>
                        {filtered.length === 0
                            ? (<div className={classes.item}>{searchQuery}</div>)
                            : (filtered.map((item, index) => (
                                <div key={index} className={classes.item}>
                                    {item}
                                </div>
                                ))
                            )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default SidebarSearch;