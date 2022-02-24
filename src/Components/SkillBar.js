import { Component } from "react";

class SkillBar extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="skill-bar">
                <h1>{ this.props.name }</h1>
                <div className="bar-before">
                    <div className="bar-after"
                     style = {{ background : this.props.color }}></div>
                </div>
            </div>
        )
    }
}

export default SkillBar