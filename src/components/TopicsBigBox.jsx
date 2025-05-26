import React from 'react'
import TopicLists, { topics1, topics2, topics3 } from "./TopicLists";

function TopicsBigBox() {
  return (
    <div className='topics-section'>
        <h2>Discussion Topics</h2>
        <div className="topics-top">
            <TopicLists topicList={topics1} className="topics1" />
            <TopicLists topicList={topics2} className="topics2" />
            <TopicLists topicList={topics3} className="topics3" />
        </div>
    </div>
  );
}

export default TopicsBigBox;