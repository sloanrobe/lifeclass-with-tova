import React from 'react';
import Topics from './Topics';
import './style.css';
import './topics.css';
import './testimonials.css';

const topics1 = ['Daily Happiness', 'Gratitude', 'Life Purpose', 'Self-Esteem', 'Self-Love', 'Self-Care', 'Connection', 'Growth', 'Friendships', 'Relationships', 'Communication', 'Entrepreneurship'];
const topics2 = ['Love', 'Success', 'Self-Sufficiency', 'Motivation', 'Stuckness', 'Reflection', 'Journaling', 'Chakras', 'Energy', 'Stillness', 'Breathing', 'Spiritual Guidance'];
const topics3 = ['Timelines', 'Tolerance', 'Conflict Resolution', 'Judgement', 'Fear', 'Anxiety', 'Impulsivity', 'Rejection', 'Guilt', 'Shame', 'Depression', 'Consciousness'];

function App() {
  return (
    <div className="App">
      <h2>Discussion Topics</h2>
      <div className="topics-top">
        <Topics topicList={topics1} className="topics1" />
        <Topics topicList={topics2} className="topics2" />
        <Topics topicList={topics3} className="topics3" />
      </div>
    </div>
  );
}

export default App;