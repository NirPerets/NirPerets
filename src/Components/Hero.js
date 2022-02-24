import { Component } from "react";
import Word from "./Word";

class Hero extends Component {
    render() {
        return(
            <div className="hero">
                <div className="squash-text">
                    <div className="line">
                        <Word word="Hi," order = "0" />
                    </div>
            
                    <div className="line">
                        <Word word="I'm" order = "1" />
                        <Word word="Nir," order = "2" />
                    </div>
            
                    <div className="line">
                        <Word word="web" order = "3" />
                        <Word word="developer" order = "4" />
                    </div>
                </div>
                <p className="subtitle fadeIn">
                    Front End Developer
                </p>
                <div className="large-letter fadeIn">N</div>
                <div className="start">
                    Start My Journey
                </div>
            </div>
        )
    }
}

export default Hero