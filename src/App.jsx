import React from 'react';
import './styles/App.css'
import './styles/companytagline.css'
import './styles/button.css'
import './styles/style.css';
import './styles/navbar.css';
import './styles/biography.css';
import './styles/topics.css';
import './styles/help.css';
import './styles/testimonials.css';
import './styles/lifeclassbirth.css';
import './styles/experience.css'
import Biography from './components/Biography';
import Experience from './components/Experience';
import TopicBigBox from './components/TopicsBigBox';
import MyButton from './components/MyButton';
import TopicsBottomBox from './components/TopicsBottomBox';
import Help from './components/Help';
import Testimonials from './components/Testimonials';
import CompanyTagline from './components/CompanyTagline';
import LifeClassBirth from './components/LifeClassBirth';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
        <div>
            <Navbar />
        </div>
    
        <div>
            <CompanyTagline />
        </div>
        
        <div className="testimonials">
            <Testimonials />
        </div>

        <div>
            <Biography />
        </div>

        <div>
            <Experience />
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

        <footer>

        </footer>
  
    </div>   
  );
}

export default App;