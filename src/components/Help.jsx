import React from 'react'

function Help() {
  return (
    <div className="help">
        <h2>How can I help you?</h2>
        <div className="session-types">
            <div className="session1">
                <h3>1:1 Coaching</h3>
                <p>A personalized, one-on-one session focused on helping the client overcome obstacles and achieve their individual goals.</p>
            </div>
            <div className="session2">
                <h3>Discovery Call</h3>
                <p>A complimentary introductory conversation to explore the client's needs and determine the best coaching path forward.</p>
            </div>
            <div className="session3">
                <h3>Group Sessions</h3>
                <p>Collaborative coaching sessions in a group setting that foster shared growth, accountability, and community support.</p>
            </div>
        </div>
    </div> 
  )
}

export default Help