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
                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here',
                    making it look like readable English.<br/><br/>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    Various versions have evolved over the years, sometimes by accident,
                    sometimes on purpose (injected humour and the like). <br/><br/>

                    t is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                    as opposed to using 'Content here, content here',
                    making it look like readable English.
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