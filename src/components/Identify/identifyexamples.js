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
                    <Link to="/identify">Forms of Abuse</Link>
                </button>
                <button className="IdentifyButton">
                    <Link to="/identifyexamples"><b>Examples</b></Link>
                </button>
            </div>

            <div className='Physical'>
                <h2>Physical Abuse</h2>
                <ul className='exampleList'>
                    <li>Pushing, throwing, kicking</li>
                    <li>Slapping, grabbing, hitting, punching, beating, tripping, battering, bruising, choking, shaking</li>
                    <li>Pinching, biting</li>
                    <li>Holding, restraining, confinement</li>
                    <li>Breaking bones</li>
                    <li>Assault with a weapon such as a knife or gun</li>
                    <li>Burning</li>
                    <li>Murder</li>
                </ul>

            </div>
            <div className='Verbal'>
                <h2>Verbal or nonverbal abuse (psychological abuse, mental abuse, emotional abuse)</h2>
                <ul className='exampleList'>
                    <li>Threatening or intimidating to gain compliance</li>
                    <li>Destruction of the victim’s personal property and possessions, or threats to do so</li>
                    <li>Violence to an object (such as a wall or piece of furniture) or pet, in the presence of the intended victim, as a way of instilling fear of further violence</li>
                    <li>Yelling or screaming</li>
                    <li>Name-calling</li>
                    <li>Constant harassment</li>
                    <li>Embarrassing, making fun of, or mocking the victim, either alone within the household, in public, or in front of family or friends</li>
                    <li>Criticizing or diminishing the victim’s accomplishments or goals</li>
                    <li>Not trusting the victim’s decision-making</li>
                    <li>Telling the victim that they are worthless on their own, without the abuser</li>
                    <li>Excessive possessiveness, isolation from friends and family</li>
                    <li>Excessive checking-up on the victim to make sure they are at home or where they said they would be</li>
                    <li>Saying hurtful things while under the influence of drugs or alcohol, and using the substance as an excuse to say the hurtful things</li>
                    <li>Blaming the victim for how the abuser acts or feels</li>
                    <li>Making the victim remain on the premises after a fight, or leaving them somewhere else after a fight, just to “teach them a lesson”</li>
                </ul>
            </div>
            <div className='Sexual'>
                <h2>Sexual Abuse</h2>
                <ul className='exampleList'>
                    <li><b>sexual assault</b>: forcing someone to participate in unwanted, unsafe, or degrading sexual activity</li>
                    <li><b>sexual harassment</b>: ridiculing another person to try to limit their sexuality or reproductive choices</li>
                    <li><b>sexual exploitation</b>: forcing someone to look at pornography, or forcing someone to participate in pornographic film-making</li>
                </ul>
            </div>
            <div className='Stalking'>
                <h2>Stalking or Cyberstalking</h2>
                <ul className='exampleList'>
                    <li>Repeated phone calls, sometimes with hang-ups</li>
                    <li>Following, tracking (possibly even with a global positioning device)</li>
                    <li>Finding the person through public records, online searching, or paid investigators</li>
                    <li>Watching with hidden cameras</li>
                    <li>Suddenly showing up where the victim is, at home, school, or work</li>
                    <li>Sending emails; communicating in chat rooms or with instant messaging</li>
                    <li>Sending unwanted packages, cards, gifts, or letters</li>
                    <li>Monitoring the victim’s phone calls or computer-use</li>
                    <li>Contacting the victim’s friends, family, co-workers, or neighbors to find out about the victim</li>
                    <li>Going through the victim’s garbage</li>
                    <li>Threatening to hurt the victim or their family, friends, or pets</li>
                    <li>Damaging the victim’s home, car, or other property</li>
                </ul>
            </div>
            <div className='Financial'>
                <h2>Finacial Abuse</h2>
                <ul className='exampleList'>
                    <li>Withholding economic resources such as money or credit cards</li>
                    <li>Stealing from or defrauding a partner of money or assets</li>
                    <li>Exploiting the intimate partner’s resources for personal gain</li>
                    <li>Withholding physical resources such as food, clothes, necessary medications, or shelter from a partner</li>
                    <li>Preventing the spouse or intimate partner from working or choosing an occupation</li>
                </ul>
            </div>
            <div className='Spiritual'>
                <h2>Spiritual Abuse</h2>
                <ul className='exampleList'>
                    <li>Using the spouse’s or intimate partner’s religious or spiritual beliefs to manipulate them</li>
                    <li>Preventing the partner from practicing their religious or spiritual beliefs</li>
                    <li>Ridiculing the other person’s religious or spiritual beliefs</li>
                    <li>Forcing the children to be reared in a faith that the partner has not agreed to</li>
                </ul>
            </div>

        </div>
    )
}
