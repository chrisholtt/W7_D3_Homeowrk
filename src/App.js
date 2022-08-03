import { useState, useEffect } from 'react'
import MusicBanner from './components/MusicBanner';
import Navbar from './components/Navbar';
import Select from './components/Select';
import LightModeButton from './components/LightModeButton';
import './App.css';


function App() {
  const [music, setMusic] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [lightMode, setLightMode] = useState(true)


  useEffect(() => {
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(res => res.json())
      .then(data => setMusic(data.feed.entry))
  }, [])

  const handleGenre = (genre) => {
    setSelectedGenre(genre)
  }

  const handleLightMode = () => {
    setLightMode((prev) => {
      return !prev
    })
  }

  return (
    <div className="bg">
      <Navbar />
      <div className="center"><LightModeButton handleLightMode={handleLightMode} lightMode={lightMode} /></div>
      {music && <Select music={music} handleGenre={handleGenre} />}
      {music && <MusicBanner music={music} selectedGenre={selectedGenre} />}
    </div>
  );
}

export default App;
