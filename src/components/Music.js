import React from 'react'

const Music = ({ music, selectedGenre }) => {

    const musicNodes = music.map((music, index) => {
        if (selectedGenre == 'all') {
            return (
                <div className='music' key={index}>
                    <h3>No. {index + 1}</h3>
                    <h2>{music['im:name']['label']}</h2>
                    <h3>{music['im:artist']['label']}</h3>
                    <img src={music['im:image'][0]['label']} alt="" />
                    <h3>{music['category']['attributes']['term']}</h3>
                    <audio src={music}></audio>
                </div>
            )
        }
        if (music['category']['attributes']['term'] === selectedGenre) {
            return (
                <div className='music' key={index}>
                    <h3>No. {index + 1}</h3>
                    <h2>{music['im:name']['label']}</h2>
                    <h3>{music['im:artist']['label']}</h3>
                    <img src={music['im:image'][0]['label']} alt="" />
                    <h3>{music['category']['attributes']['term']}</h3>
                    <audio src={music}></audio>
                </div>
            )
        }
    })

    return (
        <>
            <div className='music-items'>
                {musicNodes}
            </div>
        </>
    )
}

export default Music