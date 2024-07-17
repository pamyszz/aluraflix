const API_BASE_URL = import.meta.env.VITE_API_URL;

export default {
    getHomeList: async () => {
        const response = await fetch(`${API_BASE_URL}/home-list`);
        const data = await response.json();
        return data;
    },
    getMovieInfo: async (movieId, type) => {
        const response = await fetch(`${API_BASE_URL}/movie-info/${type}/${movieId}`);
        const data = await response.json();
        return data;
    },
    getTrailer: async (movieId, type) => {
        const response = await fetch(`${API_BASE_URL}/trailer/${type}/${movieId}`);
        const data = await response.json();
        return data;
    }
}
