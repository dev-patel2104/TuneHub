export const getAllSongs = async () => {
    try
    {
        const response = await fetch('https://tunehub-server.onrender.com/songs');
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching songs');
        return null;
    }
        
};

export const getAllGenres = async () => {
    try
    {
        const response = await fetch('https://tunehub-server.onrender.com/genre');
        const data = await response.json();
        return data;
    }
    catch(error)
    {
        console.error('Error fetching genres');
        return null;
    }
}