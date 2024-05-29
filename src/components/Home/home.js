import React from 'react';
import './home.css';
import PopButton from './pop-up.js';
  

export default function Home(props) {
    return (
        <div className='home-page'>

            <PopButton />

            {/* // Home Page: logo, find help button, and exit button */}
            <section class="resource-section">
                <div class="resource-content">
                    <div class="resource-info">
                        <div class="resource-text">
                            <p class="resource-description">
                                Find resources near you. Search for local shelters, hotlines, and other support services.
                            </p>
                            <a href='/findhelp' class="resource-action" tabindex="0">Find Help Near Me</a>
                        </div>
                    </div>
                    <div class="resource-media">
                        <div class="image-gallery">
                            <div class="image-row">
                                <div class="main-image-container">
                                    <img
                                        loading="lazy"
                                        src="/img/logo-home.png"
                                        class="main-image"
                                        alt="logo"
                                    />
                                </div>

                                {/* Exit Button - Redirects user to Google */}
                                <div class="thumbnail-container">
                                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                                        <img
                                            loading="lazy"
                                            src="/img/exit-btn.png"
                                            class="thumbnail"
                                            alt="thumbnail"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />

            {/* // Home Page: external resource pages */}


            <section className='webpage-links'>
                <br />
                <br />
                <br />

                <div class="columns">

                    {/* Column 1: Is your relationship safe */}
                    <article class="column-first">
                        <div class="content-box">
                            <h2 class="header-first">Is your relationship safe?</h2>
                            <p class="text-first"> Learn about domestic violence with statistics, expert insights and stories of survival. Explore resources on recognizing if you're experiencing abuse. </p>

                            {/* Learn More button links to identify page */}
                            <a href='/identify'>
                            <button class="btn-first" tabindex="0">Learn More</button>
                            </a>
                        </div>
                    </article>

                    {/* Column 2: Need help finding local support groups? */}
                    <article class="column-second">
                        <div class="content-box-second">
                            <h2 class="header-second">Need help finding local support groups?</h2>
                            <p class="text-second"> Search for confidential support groups in Seattle. These groups offer a safe space to connect with others who understand what you're going through. <br /><br /><br /> </p>
                           
                           {/* Find Support button links to connect page */}
                           <a href='/connect'>
                            <button class="btn-second" tabindex="0">Find Support</button>
                            </a>
                        </div>
                    </article>

                    {/* Column 3: Support Others */}
                    <article class="column-third">
                        <div class="content-box-third">
                            <h2 class="header-third"> Support Others</h2>
                            <p class="text-third"> Learn more about how to help those experiencing abuse.
                                Choose the best way for you to support victims and survivors of domestic violence. </p>

                            {/* Get Started Here button links to external support pages */}
                            <a href='https://www.thehotline.org/support-others/ways-to-support-a-domestic-violence-survivor/'>
                            <button class="btn-third" tabindex="0">Get Started Here</button>
                            </a>

                        </div>
                    </article>
                    
                </div>

                <br />
                <br />
                <br />

            </section>

            <br />
            <br />
            
            {/* Footer section of website */}
            <section className='home-footer'>
                <div className="footer-content">
                    <h1 className='footer-heading'>Seattle Safe Haven: Your Path to Safety and Healing</h1>
                    <p className='footer-text'>
                        <strong>Experiencing domestic violence?</strong> We're here to help. Seattle Safe Haven connects you to essential services and resources across King County, empowering you to take control of your future.
                    </p>
                </div>
                <img className='footer-image' src='/img/home-help.png' alt="" />
            </section>


            <br />
            <br />
            <br />

        </div>
    );


}