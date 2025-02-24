// to-do: export header, links, and videos into separate components

import { useState, useEffect } from 'react'

import butterfly from './assets/butterfly.jpg'
import './App.css'

function App() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Check if the scroll position on the Y-axis (vertical scroll) is greater than 100 pixels
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // If scrolled more than 100px, set the state 'scrolling' to true
        setScrolling(true);
      } else {
        // If scrolled less than or equal to 100px, set the state 'scrolling' to false
        setScrolling(false);
      }
    };
    // add event listener, when user scrolls handleScroll() executes
    window.addEventListener('scroll', handleScroll);

    // return cleanup function that removes the eventlistener when component unmounts
    return () => {
      // Remove the 'scroll' event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);// The empty dependency array ensures this effect runs only once when the component mounts

  // videos object
  const videos1 = [
    '5RpPTRcz1no', // Example video ID
    'NcSil8NeQq8',
    'mYrPNvVhKLU',
    'rpEg4LS3CT0',
    'rRq14ZBYwus',
    'RRzfsbIkSoo',
  ];

  return (
    <>
      <div className="App">
        {/* Header */}
        <header className={`header ${scrolling ? 'scrolled' : ''}`}>
          <div className="header-content">
            <a href='https://america2.news/content/files/2025/02/Evidence_Brief_-_Imminent_Neoreactionary_Threat.pdf' target="_blank">
              <h1 className='header-h1'>who the hell is Curtis Yarvin?</h1>
            </a>
            <p className='header-p'>why do Musk and Vance worship him?</p>
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <ul>
              <li><a href="#info">info</a></li>
              <li><a href="#links">links</a></li>
              <li><a href="#videos">videos</a></li>
            </ul>
          </nav>
        </header>

        {/* bottom header with links, when you click they scroll down the page */}
      </div>

      {/* Body/Content */}
      <div className='content'>

        {/* Info Section */}
        <section id='info'>
          <div className='dark-enlightenment-info-section'>
            <p className='dark-enlightenment-title'>Curtis is the co-creator of the <a className='dark-enlightenment-link' href='https://en.wikipedia.org/wiki/Dark_Enlightenment' target="_blank">"Dark Enlightenment"</a></p>
            <p className='dark-enlightenment-text'>The Dark Enlightenment states that America's democracy has failed and it must be replaced with a "Techno-Monarchy".  That this King would be synonymous with a dictator, and that he would simply be a figurehead as a CEO runs the country like a business.</p>
            <p className='dark-enlightenment-text'>We are witnessing the dismantling of democracy, and they are following his plan to a T.  To fight this fascist movement, we must inform ourselves on their plan and FIGHT BACK TO SAVE OUR COUNTRY.</p>
            <p className='dark-enlightenment-text'>We have approximately 6 months to get our country back.</p>
          </div>

          <div className='butterfly'>
            <p className='butterfly-title'>These are the 7 steps of Yarvin's <a href='https://graymirror.substack.com/p/the-butterfly-revolution' target='_blank'>Butterfly Revolution</a></p>
            <p className='butterfly-text'>We are currently on Step 4 out of 7</p>
            <a href="https://graymirror.substack.com/p/the-butterfly-revolution" target="_blank">
              <img src={butterfly} className="butterfly" alt="butterfly revolution" />
            </a>
          </div>
        </section>

        {/* Links Section */}
        <section id="links" className='links-section'>
          <h2 className='links-title'>Links</h2>
          <p className='links-text'>Recently there have been many articles about Yarvin cropping up in the Zeitgeist.  Here are a few.</p>

          <p className='links'><a href='https://www.nytimes.com/2025/01/18/magazine/curtis-yarvin-interview.html' target='_blank'>New York Times - Curtis Yaring Says Democracy is Done.  Powerful Conservatives are Listening</a></p>
          <p className='links'><a href='https://www.theguardian.com/us-news/2024/dec/21/curtis-yarvin-trump' target='_blank'>The Guardian - He’s anti-democracy and pro-Trump: the obscure ‘dark enlightenment’ blogger influencing the next US administration</a></p>
          <p className='links'><a href='https://www.politico.com/news/magazine/2025/01/30/curtis-yarvins-ideas-00201552' target='_blank'>Politico - Curtis Yarvin’s Ideas Were Fringe. Now They’re Coursing Through Trump’s Washington</a></p>

          <p className='links'><a href='https://america2.news/content/files/2025/02/Evidence_Brief_-_Imminent_Neoreactionary_Threat.pdf' target='_blank'>Silicon Valley Memo: The Imminent Neoreactionary Threat to the American Republic</a></p>
          <p className='links'><a href='https://www.thenerdreich.com/reboot-elon-musk-ceo-dictator-doge/' target='_blank'>Nerd Reich: 'Reboot' Revealed: Elon Musk's CEO-Dictator Playbook</a></p>
          <p className='links'><a href='https://www.rollingstone.com/politics/politics-features/owned-book-peter-thiel-trump-tech-silicon-valley-1235276868/' target='_blank'>Rolling Stone: Peter Thiel, Trump’s Man in Silicon Valley</a></p>
          <p className='links'><a href='https://www.democracynow.org/2025/2/20/quinn_slobodian_maga_doge_capitalism' target='_blank'>Democracy Now: “Crack-Up Capitalism”: Historian Quinn Slobodian on Trump, Musk & the Movement to “Shatter” the State</a></p>

        </section>

        {/* Videos Section */}
        <section id="videos" className='videos-section'>
          <h2 className='videos-title'>Videos</h2>
          <p>Here are some videos explaining Curtis Yarvin's ideas.</p>

        <div className="video-grid">
          {/* map over the videos1 object */}
          {videos1.map((videoId, index) => (
            <iframe
              key={index}
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>
    </div>
    </>
  )
}

export default App
