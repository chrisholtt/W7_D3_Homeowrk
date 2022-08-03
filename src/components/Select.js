import React from 'react'

const Select = ({ music, handleGenre }) => {

    const genres = music.map((music) => {
        return music['category']['attributes']['term']
    })

    const uniqueGenres = [...new Set(genres)]

    const genreOptions = uniqueGenres.map((genre, index) => {
        return (
            <option value={genre} key={index}>{genre}</option>
        )
    })

    const handleChange = (e) => {
        const { value } = e.target
        handleGenre(value)
    }

    return (
        <div className='center'>
            <label htmlFor="filter">filter by genre</label>
            <select name="filter" onChange={handleChange}>
                <option value="all">all</option>
                {genreOptions}
            </select>
        </div>
    )
}

export default Select