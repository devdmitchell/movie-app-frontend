import { Link } from "react-router-dom"

function MovieList({movieList}){
    return movieList.map((movie) => {
            return (
                <div key={movie.imdbID}>
                    <Link>
                    <div>
                        <img className="moviePoster" src={movie.Poster} alt={movie.Title}></img>
                    </div>
                    <div>
                        Title: {movie.Title}
                        <br />
                        Year: {movie.Year}
        
                    </div>
                </Link>
                </div>
            )
        })}


export default MovieList