import React from 'react'

function Biography() {
  return (
    <div className="biography-container">
        <div className="biography">
            <img id="headshot" src="./images/BP-georgina-beach17.jpg" alt="Life Coach walking on beach"></img>
            <div class="image-quote">
                <h2>Awaken</h2>
                <h2>Your Inner</h2>
                <h2>Light</h2>
            </div>  
        </div>   
        <div className="bio-content">
            <p>My mission is to utilize transformative methods to help people step into their butterfly-ness and out of their cocoons.  I am driven by helping individuals of all ages overcome barriers that affect their personal, emotional, and intellectual growth.  I believe that it is never too late to free oneself from self-imposed boundaries and limitations. I am a student of life who continues to transcend into my truth.</p>
            <p class="teacher">I am a veteran teacher with a commitment to individual success in all aspects of life.</p>
            <p>I earned a Master's degree in Education from Nova Southeastern University after graduating from the University of Miami with a Bachelor’s degree in Communication and Psychology.  I am also certified in Exceptional Student Education (ESE).  I have taught at nearly every level – from preschool through high school – during my 30+ year career as a certified educator, as well as participated in countless personal growth seminars and workshops.</p>
        </div>
    </div>
  )
}

export default Biography