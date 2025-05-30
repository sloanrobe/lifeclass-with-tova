import React from 'react';
import './styles/index.css'
import './styles/App.css'
import './styles/style.css';
import './styles/navbar.css';
import './styles/biography.css';
import './styles/topics.css';
import './styles/help.css';
import './styles/testimonials.css';
import './styles/lifeclassbirth.css';
import Biography from './components/Biography';
import TopicBigBox from './components/TopicsBigBox';
import MyButton from './components/MyButton';
import TopicsBottomBox from './components/TopicsBottomBox';
import Help from './components/Help';
import Testimonials from './components/Testimonials';
import CompanyTagline from './components/CompanyTagline';
import LifeClassBirth from './components/LifeClassBirth';

function App() {
  return (
    <div className="App">
        <nav className="navbar">
            <h1>LifeClass with Tova</h1>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#birth">The Birth of LifeClass</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    
        <div>
            <CompanyTagline />
        </div>

        <div id="bio-section">
            <Biography />
        </div>

        <div className="topics-top">
            <TopicBigBox />
        </div>

        <div className="button-schedule">
            <MyButton />
        </div>
    
        <div className="topics-bottom-wrapper">
            <TopicsBottomBox />
        </div>

        <div className="help-section">
            <Help />
        </div>

        <br />

        <div className='birth'>
            <LifeClassBirth />
        </div>

        <div className="testimonials">
            <Testimonials />
        </div>
        
        <footer>

        </footer>
  
    </div>   
  );
}

export default App;