/* eslint-disable react/prop-types */
import { useMovieContext } from "../contexts/MovieContext"

function MovieCard(props) {
    const {isFavorites, addToFavorites, removeFavorites} = useMovieContext()

    const favorite = isFavorites(props.movie.id)

    function handleFavorites(e) {
        e.preventDefault()
        if(favorite) removeFavorites(props.movie.id)
        else addToFavorites(props.movie)
    }

    return (
        <>
        <div className="movie_card m-5 overflow-hidden bg-amber-300 rounded-xl">
            <div className="movie_poster relative h-96 group">
                <img className="h-full w-full object-cover " src={`https://image.tmdb.org/t/p/w500${props.movie.poster_path}`} alt={props.movie.title}/>
                <div className="absolute top-0 opacity-0 transition group-hover:opacity-20 bg-amber-900 w-full h-full"></div>
                <div className="absolute top-0 right-0 p-3 cursor-pointer opacity-100 hover:opacity-90 text-center m-2 text-2xl rounded-4xl text-white">
                <i onClick={handleFavorites}  className={favorite ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart"}></i>
                </div>
            </div>
            <div className="movie_details text-center p-3">
                <h3 className="text-lg font-bold text-amber-800">{props.movie.title}</h3>
                <p className="text-amber-800">{props.movie.release_date.split('-')[0]}</p>
            </div>
        </div>
        </>
    )
}

export default MovieCard;