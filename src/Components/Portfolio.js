import { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import { JsProjects, ShopifyProjects } from "../Projects/ProjectsDB";
import SmallTitle from './SmallTitle'

class Portfolio extends Component {

    state = {
        JsProjects: JsProjects,
        ShopifyProjects: ShopifyProjects,
        SelectedProject: ShopifyProjects[0],
        showModal: false,
    }

    closeModal = () => {
        this.setState({showModal: false})
    }
    
    changeSelectedProject = (i) => {
        this.setState({
            SelectedProject : ShopifyProjects[i],
            showModal: true
        })
    }

    swapPlaces = () => {
        let array = this.state.ShopifyProjects
        const temp = array[0]
        array[0] = array[1]
        array[1] = temp

        this.setState({ShopifyProjects: array})
    }

    componentDidMount() {
    }

    render() {
        if(!this.state.JsProjects || !this.state.ShopifyProjects) return (<></>)

        return(
            <>
                <div className="portfolio-container">
                    <SmallTitle sentence="Full Stack Projects" />
                    <div className="portfolio-grid">
                        {
                            this.state.JsProjects.map((item, index) => {
                                return(
                                    <PortfolioItem 
                                    index={index}
                                    bg={item.thumbnail} 
                                    name={item.name} 
                                    category={item.category} 
                                    brief={item.brief} 
                                    url={item.url} 
                                    changeSelectedProject={this.changeSelectedProject}/>
                                )
                            })
                        }
                    </div>
                    <SmallTitle sentence="Shopify & Wordpress Projects" />
                    <div className="portfolio-grid">
                        {
                            this.state.ShopifyProjects.map((item, index) => {
                                return(
                                    <PortfolioItem 
                                    index={index}
                                    bg={item.thumbnail} 
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
                        <div className="text">
                            <h2>{ this.state.SelectedProject.category }</h2>
                            <h1>{ this.state.SelectedProject.name }</h1>
                            <p>
                                { this.state.SelectedProject.brief }
                            </p>
                            <a target="_blank" href={this.state.SelectedProject.url}>Visit Project</a>
                        </div>
                        <div className="image">
                            <img src={ this.state.SelectedProject.image } />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Portfolio