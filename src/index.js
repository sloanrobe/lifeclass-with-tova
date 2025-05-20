import React from 'react';
import ReactDOM from 'react-dom/client';
import Topics from './Topics';

const topics1 = ['Daily Happiness', 'Gratitude', 'Life Purpose', 'Self-Esteem', 'Self-Love', 'Self-Care', 'Connection', 'Growth', 'Friendships', 'Relationships', 'Communication', 'Entrepreneurship'];
const topics2 = ['Love', 'Success', 'Self-Sufficiency', 'Motivation', 'Stuckness', 'Reflection', 'Journaling', 'Chakras', 'Energy', 'Stillness', 'Breathing', 'Spiritual Guidance'];
const topics3 = ['Timelines', 'Tolerance', 'Conflict Resolution', 'Judgement', 'Fear', 'Anxiety', 'Impulsivity', 'Rejection', 'Guilt', 'Shame', 'Depression', 'Consciousness'];

const root = ReactDOM.createRoot(document.getElementById('topics-root'));

root.render(
  <div className="topics-top">
    <Topics topicList={topics1} className="topics1" />
    <Topics topicList={topics2} className="topics2" />
    <Topics topicList={topics3} className="topics3" />
  </div>
);