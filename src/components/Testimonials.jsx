import React, { useEffect, useState } from 'react';
import '../styles/testimonials.css';

const reviewImages = [
  '/images/lifeclass-review1.PNG',
  '/images/lifeclass-review2.PNG',
  '/images/lifeclass-review3.PNG',
  '/images/lifeclass-review4.PNG',
  '/images/lifeclass-review5.PNG',
  '/images/lifeclass-review6.PNG',
  '/images/lifeclass-review7.PNG',
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade out
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviewImages.length);
        setFade(true); // Fade in new image
      }, 500); // Duration of fade out before switching
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonials">
      <div className={`testimonial-image ${fade ? 'fade-in' : 'fade-out'}`}>
        <img src={reviewImages[currentIndex]} alt={`Review ${currentIndex + 1}`} />
      </div>
    </div>
  );
}

export default Testimonials;


/* const testimonials = [
    `"As a mental health professional and a parenting educator, I usually tell a person that love is the answer.  Love of self. Love of the other.  Love to understand another's choices and behavior.  Mrs. Levy is Love personified.  Those who I have referred to her have changed and healed because of her love. They healed because they discovered the space to find the love within themselves.  I have referred to her cases where I knew love was the answer and she has never failed.  I highly recommend Mrs. Levy.  You won't regret it."`,
    `"Tova is raw, unfiltered and very intuitive.  My life has changed from the moment Tova entered it.  I am enthusiastic about my life and I am present in the now.  I am fearless because of you, Tova.  I look forward to seeing Tova weekly - in every session I continue to learn, grow and evolve.  I am grateful for you, Tova."`,
    `"Meeting with Tova has helped me beyond words.  I came to Tova hurt, my spirit crushed, feeling defeated from life traumas.  From our first meeting, I knew this was something I wanted and needed in my life.  It was like my heart shifted. My mindset changed.  Our sessions have allowed me to finally see me and my potential from another perspective. The confidence that lens has created has given me permission to now tap into that potential.  It's one thing for someone to believe in you and your potential, but when you believe in yourself, this is when the magic happens.  I'm ready to make magic."`,
    `"Tova was introduced to us as a child whisperer, however she has turned out to be more than that.  It takes a village to help our little ones thrive and develop to their potential and individuality.  And not only she has been helping our daughter through practicing scenarios and helping her find tools for reflection but also she has been the most amazing resource and support for us as parents.  Tova has a beautiful and optimistic disposition and has been able to connect so fast and so deeply with our daughter.  We are very happy to have been referred to her and have her support us during these crazy COVID times."`,
    `"Tova has helped me get through so many hardships and helped me realize my worth.  I cannot talk highly enough about her and how wonderful she truly is.  For so long I felt stuck in my life because I could not process my emotions from the events that I had went through.  I now can say I am at peace with everything and continue to grow and thrive."`,
    `"Tova Levy is a blessing on earth.  From being my fourth grade teacher, to twenty years from that point she has done nothing but inspire me to do more for myself.  Her life class has honestly changed my perspective in life, and I would honestly recommend talking with this amazing woman.  She will be that energy you need to really change your life."`,
    `"Tova is an excellent communicator and has helped me tremendously to get my life back on track.  She is honest, kind, and very caring.  She listens and gives back advice that has genuinely helped me to grow as a person."`,
    `"Tova, best meditations ever!  Not quite like the normal ones, but we don't do normal in LifeClass, do we?  Thank youuuuu for opening my eyes.  You have given me the gift of healing."`,
    `"With Tova, I have a very very safe place in which I can be absolutely and crudely honest.  I can express all of myself feeling completely safe.  She is always there holding my hand even if we are not in the same room.  She can teach and explain things and feelings and people in a way that is super clear.  And the best part is that sometimes I can start crying but I always end the sessions with a smile.  She helps me in looking at myself with love and compassion and especially with joy and laughter.  I am really thankful because she is helping me a lot."`,
]

function Testimonials() {
    const [current, SetCurrent] = useState(0)

    return (
        <div className>
            <h2>Testimonials</h2>
        </div>
    )
} */