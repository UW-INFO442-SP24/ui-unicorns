import React from 'react';
import './home.css';

export default function Home(props) {

    return (
        <div class="container">
            <section class="flex-container">
                <article class="text-column">
                    <div class="text-center">
                        <p class="highlight-text">
                            Find resources near you. Search for local shelters, hotlines, and other support services.
                        </p>
                        <button class="button">Find Help Near Me</button>
                    </div>
                </article>
                <div class="image-column">
                    <div class="grow-container">
                        <div class="image-flex">
                            <figure class="image-main">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/641a86bec7039646e09431190d7066c82fb185474813d7b2ef535b7469bbf624?apiKey=51c46254fab5448ea219e1641332abb8&" class="main-image" alt="" />
                            </figure>
                            <figure class="image-side">
                                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1fa39752cfaf1ab0010690eb3d5229c1affdbe2895b1b47ee72e8ec5c316ba2?apiKey=51c46254fab5448ea219e1641332abb8&" class="side-image" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}