import React from 'react';

function Topics({ topicList, className }) {
  return (
    <ul className={className}>
      {topicList.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  );
}

export default Topics;