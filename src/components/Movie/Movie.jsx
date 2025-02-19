import axios from 'axios'
import react, { useState } from 'react'
import { Link } from 'react-router-dom'
import MovieList from './MovieList'
import './Movie.css'

function Movie() {
    const [textInput, setTextInput] = useState('')
    const [movieList, setMovieList] = useState([])

    const handleOnSearch = async (e) => {
        e.preventDefault()
        setTextInput('')
        try {
            const movie = await axios.get(`http://www.omdbapi.com/?apikey=3c4e7e18&s=${textInput}`)
            setMovieList(movie.data.Search)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div id="mainApp">
                <input
                    type="text"
                    placeholder='Search for a movie...'
                    name='movie'
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button onClick={handleOnSearch}>  Search  </button>
            </div>
            <div id="movieListContainer">
                <h3>Coolest Movie App</h3>
                <div>
               <MovieList movieList = {movieList} />
                </div>
            </div>
        </div>
    )
}

export default Movie