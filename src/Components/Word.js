import { Component } from "react";
import Letter from "./Letter";

class Word extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        word: this.props.word.split('')
    }

    componentDidMount() {
    }

    render() {
        return(
            <div className="word fadeIn" style={{ animationDelay : ((300 * this.props.order) + 'ms')}}>
                {
                    this.state.word.map(item => {
                        return(<Letter letter = {item} />)
                    })
                }
            </div>
        )
    }
}

export default Word