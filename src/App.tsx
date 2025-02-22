import { useState, useEffect } from 'react'

import butterfly from './assets/butterfly.jpg'
import './App.css'

function App() {
  const [scrolling, setScrolling] = useState(false);

  // one big block, don't separate or it'll break
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // end of block


  return (
    <>
      <div className="App">
        {/* Header */}
        <header className={`header ${scrolling ? 'scrolled' : ''}`}>
          <div className="header-content">
            <a href='https://america2.news/content/files/2025/02/Evidence_Brief_-_Imminent_Neoreactionary_Threat.pdf' target="_blank">
              <h1 className='header-h1'>Who the Hell is Curtis Yarvin?</h1>
            </a>
            <p className='header-p'>And why do Musk & Vance worship him?</p>
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul>
              <li><a href="#info">Info</a></li>
              <li><a href="#links">Links</a></li>
              <li><a href="#videos">Videos</a></li>
            </ul>
          </nav>
        </header>

        {/* bottom header with links, when you click they scroll down the page */}
      </div>

      {/* Body/Content */}
      <div className={`content ${scrolling ? 'content-scrolled' : ''}`}>

        <div className='dark-enlightenment-info-section'>
          <p className='dark-enlightenment-title'>Curtis is the co-creator of the <a className='dark-enlightenment-link' href='https://en.wikipedia.org/wiki/Dark_Enlightenment' target="_blank">"Dark Enlightenment"</a></p>
          <p className='dark-enlightenment-text'>The Dark Enlightenment states that America's democracy has failed and it must be replaced with a "Techno-Monarchy".  That this King would be synonymous with a dictator, and that he would simply be a figurehead as a CEO runs the country like a business.</p>
          <p className='dark-enlightenment-text'>We are witnessing the dismantling of democracy, and they are following his plan to a T.  To fight this fascist movement, we must inform ourselves on their plan and FIGHT BACK TO SAVE OUR COUNTRY.</p>
          <p className='dark-enlightenment-text'>We have approximately 6 months to get our country back.</p>
        </div>

        <div className='butterfly'>
          <a href="https://react.dev" target="_blank">
            <img src={butterfly} className="butterfly" alt="butterfly revolution" />
          </a>
        </div>

      </div>
    </>
  )
}

export default App
