import React from 'react';
import './connect.css';

export default function Connect(props) {
  return(
    <div class="container">
      <div>
        {/* hero */}
      </div>

      <div>
        <header>Stories</header>
        <p class="s-intro">
          Read personal experiences of resilience and hope from those who have faced domestic
          violence. These stories illuminate the path to safety and healing.
        </p>

        <div class="board row align-items-center text-center">
          <div class="col">
            <div class="story">
              <div class="pin">
                {/* circle */}
              </div>
              <div>
                <p>Jamie's story, a victim of domestic violence</p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="story">
              <div class="pin">
                {/* circle */}
              </div>
              <p>To Hell and Back: A survivor's story of Ricci Gay</p>
            </div>
          </div>
        </div>

        <div class="but-con">
          <button class="but">Share your story</button>
        </div>
      </div>

      <div class="section3">
        <header>Seattle Support Group</header>
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
              <button class="learn">Learn More</button>
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
              <button class="learn">Learn More</button>
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
              <button class="learn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}