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
                        <p>
                            { props.brief }
                        </p>
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