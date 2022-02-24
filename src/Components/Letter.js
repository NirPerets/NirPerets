import { Component } from "react";

class Letter extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        jump: false,
    }

    hoverLetter = () => {
        this.setState({jump: true})
    }

    resetAnimation = () => {
        setTimeout(() => {
            this.setState({ jump: false })
        }, 1200)
    }

    render() {
        return(
            <h1 
                onMouseEnter={this.hoverLetter} 
                onMouseLeave={this.resetAnimation}
                className = {(this.props.letter == 'N' ? 'special-n ' : ' ') + (this.state.jump ? 'squash': '')}>
                    { this.props.letter }
            </h1>
        )
    }
}

export default Letter;