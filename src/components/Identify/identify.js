import React from 'react';

export default function Identify(props) {
    return (
        <div className='FindHelp'>
            <div className='FindHelpTitle'>
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
        </div>
    )
}
