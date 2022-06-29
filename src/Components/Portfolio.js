import { Component } from "react";
import PortfolioItem from "./PortfolioItem";
import { JsProjects, ShopifyProjects } from "../Projects/ProjectsDB";
import SmallTitle from './SmallTitle'

class Portfolio extends Component {

    state = {
        JsProjects: JsProjects,
        ShopifyProjects: ShopifyProjects,
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
                                    image={item.image} 
                                    name={item.name} 
                                    category={item.category} 
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
            </>
        )
    }
}

export default Portfolio