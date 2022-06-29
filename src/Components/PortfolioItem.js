import { Component } from "react";
import handleViewport from 'react-in-viewport'

class PortfolioItem extends Component {

    constructor(props) {
        super(props)
    }

    state = {
        backgroundImage: "url('" + this.props.bg + "')",
        showModal: false,
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <>
            <div className="portfolio-item-container">
                <div className="portfolio-item" style={{ backgroundImage: this.state.backgroundImage }} onClick={(e) => this.props.changeSelectedProject(this.props.index)}>
                    <div className="text">
                        <h1>{ this.props.name }</h1>
                        <p>{ this.props.category }</p>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
            </>
        )
    }
}

export default PortfolioItem