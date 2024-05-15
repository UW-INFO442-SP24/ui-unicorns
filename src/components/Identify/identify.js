import React from 'react';
import { Link } from 'react-router-dom';
import './identify.css';

export default function Identify(props) {
    return (
        <div className='Identify'>
            <div className='IdentifyTitle'>
                <h1>Identify Abuse</h1>
            </div>

            <div className='IdentifyVideo'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_RqXZL93kyQ"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
            <br></br>

            <div className='IdentifyButtons'>
                <button className="IdentifyButton">
                    <Link to="/identify"><b>Forms of Abuse</b></Link>
                </button>
                <button className="IdentifyButton">
                    <Link to="/identifyexamples">Examples</Link>
                </button>
            </div>
            <div className='Physical'>
                <h2>Physical Abuse</h2>
                <p>Involves the use of physical violence, or threats of it, to maintain power over an individual. Because of this, survivors are afraid and uncertain when more abuse will occur. This often reinforces the regular use of other, more subtle, types of abuse.</p>
            </div>
            <div className='Verbal'>
                <h2>Verbal or nonverbal abuse (psychological abuse, mental abuse, emotional abuse)</h2>
                <p>Includes non-physical behaviors that are meant to control, isolate, or frighten someone. These behaviors are often more subtle and hard to identify but are just as serious as other types of abuse.</p>
            </div>
            <div className='Sexual'>
                <h2>Sexual Abuse</h2>
                <p>When a partner controls the physical and sexual intimacy in a relationship. This often involves acting in a way that is non-consensual and forced.</p>
            </div>
            <div className='Stalking'>
                <h2>Stalking or Cyberstalking</h2>
                <p><b>Stalking</b> occurs when someone watches, follows, or harasses you repeatedly, making you feel afraid or unsafe, and may occur from someone you know, a past partner, or a stranger. This can include different types of abuse. <b>Cyberstalking</b> is the use of technology and the Internet to bully, harass, stalk, intimidate, or control a partner. This behavior is often a form of verbal or emotional abuse conducted online.</p>
            </div>
            <div className='Financial'>
                <h2>Finacial Abuse</h2>
                <p>Occurs when an abusive partner extends their power and control into your financial situation.</p>
            </div>
            <div className='Spiritual'>
                <h2>Spiritual Abuse</h2>
                <p>When someone uses someone else's spiritual beliefs to control, dominate, or hurt them.</p>
            </div>
        </div>
    )
}

