import { useState } from "react";
import handleViewport from 'react-in-viewport'

function PortfolioItem(props) {
    const [backgroundImage, setBackgroundImage] = useState("url('" + props.bg + "')")
    const [showModal, setShowModal] = useState(false)

    return(
        <>
            <div className="portfolio-item-container">
                <div className="portfolio-item" style={{ backgroundImage: backgroundImage }} onClick={() => setShowModal(true)}>
                    <div className="text">
                        <h1>{ props.name }</h1>
                        <p>{ props.category }</p>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>

            <div className={"portfolio-modal-container " + (showModal ? 'show' : '')}>
                <div className={"portfolio-modal " + (showModal ? 'show' : '')}>
                    <div className="close-modal" onClick={() => setShowModal(false)}>X</div>
                    <div className="text">
                        <h2>{ props.category }</h2>
                        <h1>{ props.name }</h1>
                        <div className="project-brief">
                            {
                                props.brief.projectDesc != null ? 
                                (       
                                    <div>
                                        <h3>Project Description:</h3>
                                        <p>{ props.brief.projectDesc }</p>
                                    </div>
                                ) : <></>
                            }

                            {
                            props.brief.keyFeat != null ? 
                                (       
                                    <div>
                                        <h3>Key Features:</h3>
                                        <ol>
                                            {
                                                props.brief.keyFeat.map(feat => {return(<li>{ feat }</li>)})
                                            }
                                        </ol>
                                    </div>
                                ) : ""
                            }

                            {
                            props.brief.projectStack != null ? 
                                (       
                                    <div>
                                        <h3>Technology Stack:</h3>
                                        <ul>
                                            {
                                                props.brief.projectStack.map(feat => {return(<li>{ feat }</li>)})
                                            }
                                        </ul>
                                    </div>
                                ) : ""
                            }
                        </div>
                        <a target="_blank" href={props.url}>Visit Project</a>
                    </div>
                    <div className="image">
                        <img src={ props.image } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PortfolioItem