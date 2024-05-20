import React from 'react';
import './connect.css';

export default function Connect(props) {
  return (

    <div className='connect-page'>

      <div class="container">

        <div class="hero">
          <div class="hero-text">
            <header>Supports Starts Here</header>
            <p>Connect with other people who face similar challenges</p>
          </div>
          <img src="/img/hands.jpeg" alt="Support group hands together" class="hero-image" />
        </div>

        <div class='s-heading'>
          <header>Shared Experiences</header>
          <p class="s-intro">
            This space is dedicated to the voices of those who have encountered domestic violence. Here, you can both share your own story and read about the journeys of others towards safety and healing. Use the form provided to submit your experience—choose to remain anonymous if you prefer. Each month, we highlight two powerful stories from our community on the bulletin board, each with an external link for further resources. Your story matters, and together, we can illuminate the path to recovery and empowerment.
          </p>

          <div class="board row align-items-center text-center">
            <div class="col">
              <div class="story">
                <div class="pin">
                </div>
                <a href="https://www.womenagainstabuse.org/stories/jamies-story#:~:text=For%20six%20and%20a%20half,safety%2C%20happiness%2C%20and%20security." className="story-link">
                  <p>Jamie's story, a victim of domestic violence</p>
                </a>
              </div>
            </div>

            <div class="col">
              <div class="story">
                <div class="pin">
                </div>
                <a href="/ricci-gay-story" className="story-link">
                  <p>To Hell and Back: A survivor's story of Ricci Gay</p>
                </a>
              </div>
            </div>
          </div>

          <div class="but-con">
            <button class="but">Share your story</button>
          </div>
        </div>

        <div class="section3">
          <header>Seattle Support Groups</header>
          <p class="s-intro">
            Connect with Seattle's community support groups offering guidance, shared experiences, and a healing space. Click to find the right group for you.
          </p>
          <div class="group-container">
            <div class="groups">
              <div class="group-info">
                <h2>New beginning</h2>
                <p>
                  Provides confidential support groups along with information about the impact of
                  domestic violence on survivors. They also offer childcare during support groups.
                  Their services are free of charge.
                </p>
              </div>
              <div class="join">
                <button class="learn">
                  <a href="https://newbegin.org/" className="learn">Learn More</a>
                </button>
              </div>
            </div>

            <div class="groups">
              <div class="group-info">
                <h2>API Chaya </h2>
                <p>
                  Offers culturally relevant support groups, safety planning, and legal advocacy
                  primarily for Asian and Pacific Islander communities but is inclusive of all.
                  They ensure language accessibility for non-English speakers.
                </p>
              </div>
              <div class="join">
                <button class="learn">
                  <a href="https://www.apichaya.org/" className="learn">Learn More</a>
                </button>
              </div>
            </div>

            <div class="groups">
              <div class="group-info">
                <h2>Domestic Abuse Women’s Network (DAWN)</h2>
                <p>
                  Provides a range of services including 24-hour crisis lines, confidential emergency
                  shelter, and support groups.
                </p>
              </div>
              <div class="join">
                <button class="learn">
                  <a href="https://www.dawnrising.org/" className="learn">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div >


  );
}