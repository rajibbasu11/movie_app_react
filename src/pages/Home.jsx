import MovieCard from "../components/MovieCard";
import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {

    
    const [searchQuery, setSearchQuery] = useState('')
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const getMovies = async () => {
            try {
                let moviesList = await getPopularMovies()
                console.log({moviesList})
                setMovies(moviesList)
                
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
            
        getMovies();
    }, [])


    const handelSearch = async(e) => {
        e.preventDefault()
        if(!searchQuery.trim()) return
        const getSearchedData = await searchMovies(searchQuery)
        console.log(getSearchedData)
        setMovies(getSearchedData)
    }

    return (
        <>
        <form onSubmit={handelSearch} className="search-form text-center mt-10 mb-5">
            <input 
                className="bg-amber-200 py-1 px-3 m-2 rounded focus:outline-0 border border-amber-500 text-amber-800 text-mg"
                type="text"
                placeholder="Search for movie.."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            <button type="submit" className="bg-amber-500 px-3 py-1 rounded text-amber-200 font-medium cursor-pointer" >Search</button>
        </form>
        {error && <div>{error}</div>}
        {loading? (<div className="text-2xl text-amber-900 text-center">Loading...</div>) : (<div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-1 xsm:grid-cols-1 px-10">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>)}
        
        </>
    )
}

export default Home;