import { Component } from "react";
import Word from "./Word";

class SmallTitle extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        words: this.props.sentence.split(' ')
    }

    render() {
        return(
            <div className="small-title">
                <div className="line">
                    {
                        this.state.words.map(item => {
                            return(<Word word = { item } />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SmallTitle