import React from 'react';

const topics1 = ['Conflict Resolution', 'Consciousness', 'Judgement', 'Depression', 'Impulsivity', 'Tolerance', 'Rejection', 'Chakras', 'Anxiety', 'Shame', 'Guilt', 'Fear'];
const topics2 = ['Life Purpose', 'Self-Esteem', 'Motivation', 'Journaling', 'Reflection', 'Stuckness', 'Breathing', 'Gratitude', 'Self-Love', 'Self-Care', 'Stillness', 'Growth'];
const topics3 = ['Spiritual Guidance', 'Entrepreneurship', 'Daily Happiness', 'Communication', 'Self-Sufficiency', 'Relationships', 'Connection', 'Friendships', 'Timelines', 'Success', 'Energy', 'Love'];

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