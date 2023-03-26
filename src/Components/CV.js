import { Component } from "react";
import SkillBar from "./SkillBar";
import SmallTitle from "./SmallTitle";

class CV extends Component {
    render() {
        return(
            <div className="cv">
                <div className="text-side">
                    <SmallTitle sentence="My Skills" />
                    <p>
                    Full Stack developer (Frontend oriented) .
                    I possess a strong technical skill set that includes expertise in React, Node.js, and AWS.
                    I'm proficient in css and use Styled Components to create visually stunning and responsive user interfaces..<br/><br/>
        
                    Whether working with startups or established companies, I always strive to deliver high-quality,
                    user-friendly applications that meet and exceed expectations.<br/><br/>

                    Overall, I'm passionate about staying up-to-date with the latest developments in full stack 
                    development and related technologies, and continuously seek out new challenges and opportunities to grow my skill set
                    </p>
                </div>
                <div className="skill-bars-container">
                    <SkillBar name="Front-end" color="#e44d26" />
                    <SkillBar name="Back-end" color="#0070ba" />
                    <SkillBar name="ReactJS" color="#d26cd5" />
                    <SkillBar name="Shopify & Wordpress" color="#95bf47" />
                    <SkillBar name="Googling" color="#fbbc05" />

                    <div className="testamonials-container">
                        <div className="testamonial">
                            <span>Ruben, Upwork</span>
                            <p>
                                "Always delivers great work. 
                                Very communicative. Quality code. 
                                Would recommend 24/7!"<br/>
                            </p>
                        </div>

                        <div className="testamonial">
                            <span>Rayi S., Upwork</span>
                            <p>
                            "Nir was a pleasure to work with,
                            and he came up with a solution that
                            made what we needed so much more simple
                            than we had ever had in mind"<br/>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CV