/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        let favoritesMovies = localStorage.getItem('favorites');

        if(favoritesMovies) setFavorites(JSON.parse(favoritesMovies)) 
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFavorites = (id) => {
        setFavorites(prev => prev.filter(movie => movie.id !== id))
    }

    const isFavorites = (id) => {
        return favorites.some(movie => movie.id === id)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFavorites,
        isFavorites
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
