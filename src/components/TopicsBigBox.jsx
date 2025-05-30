import React from 'react'
import TopicLists, { topics1, topics2, topics3 } from "./TopicLists";

function TopicsBigBox() {
  return (
    <div className='topics-section'>
        <h2>Discussion Topics</h2>
        <div className="topics-top">
          <div className='topiclist-box'>
            <h3>Healing & Emotional Awareness</h3>
            <TopicLists topicList={topics1} className="topics1" />
          </div>
          <div className='topiclist-box'>
            <h3>Self-Worth & Personal Growth</h3>
            <TopicLists topicList={topics2} className="topics2" />
          </div>
          <div className='topiclist-box'>
            <h3>Relationships & Fulfillment</h3>
            <TopicLists topicList={topics3} className="topics3" />
          </div>     
        </div>
    </div>
  );
}

export default TopicsBigBox;