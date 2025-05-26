import React from 'react';
import './styles/style.css';
import './styles/topics.css';
import './styles/testimonials.css';
import Biography from './components/Biography';
import TopicBigBox from './components/TopicsBigBox';
import MyButton from './components/MyButton';
import TopicsBottomBox from './components/TopicsBottomBox';
import Help from './components/Help';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
        <nav class="navbar">
            <div class="logo">
                <img src="./images/LifeClass_with_Tova_Logo_No_Background.PNG" alt="LifeClass with Tova logo"></img>
            </div>
            <h1>LifeClass with Tova</h1>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#birth">The Birth of LifeClass</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    
        <div id="biography-section">
            <Biography />
        </div>

        <div className="topics-top">
            <TopicBigBox />
        </div>

        <div className="button-schedule">
            <MyButton />
        </div>
    
        <div class="topics-bottom-wrapper">
            <TopicsBottomBox />
        </div>

        <div className="help-section">
            <Help />
        </div>

        <br />

        <div className="testimonials">
            <Testimonials />
        </div>
        
        <footer>

        </footer>
  
    </div>   
  );
}

export default App;