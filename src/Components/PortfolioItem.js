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
                <a href={ this.props.url } target="_blank" className="portfolio-item" style={{ backgroundImage: this.state.backgroundImage }} onClick={(e) => this.props.changeSelectedProject(this.props.index)}>
                    <div className="text">
                        <h1>{ this.props.name }</h1>
                        <p>{ this.props.category }</p>
                    </div>
                    <div className="overlay"></div>
                </a>
            </div>
            </>
        )
    }
}

export default PortfolioItem

/*
            <div className={"portfolio-modal-container " + (this.state.showModal ? 'show' : '')}>
                <div className={"portfolio-modal " + (this.state.showModal ? 'show' : '')}>
                    <div className="close-modal" onClick={this.handleModal}>X</div>
                    <div className="image">
                        <img src={ this.props.bg } />
                    </div>
                    <div className="text">
                        <h2>{ this.props.category }</h2>
                        <h1>{ this.props.name }</h1>
                        <p>
                            { this.props.brief }
                        </p>
                        <a target="_blank" href={this.props.url}>Visit Project</a>
                    </div>
                </div>
            </div>
            */