import React, { useEffect, useState } from 'react'
import Music from './Music'

const MusicBanner = ({ music, selectedGenre }) => {

    return (
        <>
            <Music music={music} selectedGenre={selectedGenre} />
        </>
    )
}

export default MusicBanner