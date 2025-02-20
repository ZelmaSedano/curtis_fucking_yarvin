import { useState, useEffect } from 'react'

// import evil_curtis from './assets/ev'
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
        <header className={`header ${scrolling ? 'scrolled' : ''}`}>
          <div className="header-content">
            <h1 className='header-h1'>Who the Hell is Curtis Yarvin?</h1>
            <p className='header-p'>and why does J.D. Vance worship him?</p>
          </div>
        </header>
      </div>

      <div className="content">
          <p>Scroll down to see the header collapse.</p>
          {/* space so you can scroll down*/}
          <div style={{ height: '500px' }}></div>
        </div>
    </>
  )
}

export default App
