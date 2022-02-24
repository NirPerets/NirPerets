import { Component } from "react";
import Item from '../item.jpg'
import PortfolioItem from "./PortfolioItem";
import Projects from "../Projects/ProjectsDB";
import handleViewport from 'react-in-viewport'

class Portfolio extends Component {

    state = {
        Projects: Projects,
        SelectedProject: Projects[0],
        showModal: false,
    }

    closeModal = () => {
        this.setState({showModal: false})
    }
    
    changeSelectedProject = (i) => {
        this.setState({
            SelectedProject : Projects[i],
            showModal: true
        })
    }

    swapPlaces = () => {
        let array = this.state.Projects
        const temp = array[0]
        array[0] = array[1]
        array[1] = temp

        this.setState({Projects: array})
    }

    componentDidMount() {
    }

    render() {
        return(
            <>
                <div className="portfolio-container">
                    <div className="portfolio-grid">
                        {
                            this.state.Projects.map((item, index) => {
                                return(
                                    <PortfolioItem 
                                    index={index}
                                    bg={item.image} 
                                    name={item.name} 
                                    category={item.category} 
                                    brief={item.brief} 
                                    url={item.url} 
                                    changeSelectedProject={this.changeSelectedProject}/>
                                )
                            })
                        }
                    </div>
                </div>

                <div className={"portfolio-modal-container " + (this.state.showModal ? 'show' : '')}>
                    <div className={"portfolio-modal " + (this.state.showModal ? 'show' : '')}>
                        <div className="close-modal" onClick={this.closeModal}>X</div>
                        <div className="image">
                            <img src={ this.state.SelectedProject.image } />
                        </div>
                        <div className="text">
                            <h2>{ this.state.SelectedProject.category }</h2>
                            <h1>{ this.state.SelectedProject.name }</h1>
                            <p>
                                { this.state.SelectedProject.brief }
                            </p>
                            <a target="_blank" href={this.state.SelectedProject.url}>Visit Project</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio