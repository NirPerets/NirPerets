import { Component } from "react";
import Journey from "./About/Journey";
import Student from "./About/Student";
import SmallTitle from "./SmallTitle";

class About extends Component {
    render() {
        return(
            <div className="about">
                <SmallTitle sentence="About me" />
            </div>
        )
    }
}

export default About