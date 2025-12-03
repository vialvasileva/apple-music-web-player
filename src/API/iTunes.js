// Универсальный поиск
export async function searchItunes(term, entity = "album", limit=25, country = "us") {
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=${entity}&limit=${limit}&country=${country}`;
    const response = await fetch(url);
    return response.json();
}

// Получение самого популярного альбома
export async function getArtistTopAlbumArtwork(artistName) {
    try {
        const data = await searchItunes(artistName, "album", 1);

        if (!data.results || data.results.length === 0) return null;

        const artwork100 = data.results[0].artworkUrl100;
        if (!artwork100) return null;

        return artwork100.replace(/\/\d+x\d+/, "/600x600");
    } catch (e) {
        console.error("getArtistTopAlbumArtwork error:", e);
        return null;
    }
}