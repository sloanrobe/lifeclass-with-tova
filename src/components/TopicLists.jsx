import React from 'react';

const topics1 = ['Daily Happiness', 'Gratitude', 'Life Purpose', 'Self-Esteem', 'Self-Love', 'Self-Care', 'Connection', 'Growth', 'Friendships', 'Relationships', 'Communication', 'Entrepreneurship'];
const topics2 = ['Love', 'Success', 'Self-Sufficiency', 'Motivation', 'Stuckness', 'Reflection', 'Journaling', 'Chakras', 'Energy', 'Stillness', 'Breathing', 'Spiritual Guidance'];
const topics3 = ['Timelines', 'Tolerance', 'Conflict Resolution', 'Judgement', 'Fear', 'Anxiety', 'Impulsivity', 'Rejection', 'Guilt', 'Shame', 'Depression', 'Consciousness'];

function TopicLists({ topicList, className }) {
  return (
    <ul className={className}>
      {topicList.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
}

export default TopicLists;
export { topics1, topics2, topics3 };