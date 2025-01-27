import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {

    const {favorites} = useMovieContext();


    console.log(favorites.length)
    if(favorites.length > 0) {
        return (
            <div>
                <h1 className="text-amber-800 font-black text-2xl text-center mt-10 mb-5">Your Favorites</h1>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-1 xsm:grid-cols-1 px-10">
            {favorites.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>
            </div>
        )
    } else {
        return(
            <div className="bg-amber-200 w-80 p-5 my-20 text-center shadow m-auto rounded">
                <h3 className="text-3xl text-amber-700">No favorites</h3>
                <p className="text-amber-900">Your favorites movies will show here!</p>
            </div>
        )
    }

}


export default Favorites;