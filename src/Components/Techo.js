import { Component } from "react";
import html from '../Icons/html'
import htmlPink from '../Icons/htmlPink'
import css from '../Icons/css'
import cssPink from '../Icons/cssPink'
import js from '../Icons/js'
import jsPink from '../Icons/jsPink'
import react from '../Icons/react'
import shopify from '../Icons/shopify'
import wordpress from '../Icons/wordpress'

class Techno extends Component {

    constructor(props) {
        super(props)
    }

    showPink = (event) => {
        const el = event.target
        const gray = el.querySelector('.gray')
        const pink = el.querySelector('.pink')

        if(el && gray && pink) {
            gray.style.opacity = '0.3'
            pink.style.opacity = '1'
        }
    }

    movePink = (event) => {
        const el = event.target
        const gray = el.querySelector('.gray')
        const pink = el.querySelector('.pink')
        var rect = el.getBoundingClientRect();

        if(el && gray && pink) {
            let x = (event.clientX - rect.left),
            y = (event.clientY - rect.top);
    
            console.log(rect.width)
            pink.style.transform = 'translate(-' + rect.width/2 + 'px,-' + rect.height/2 + 'px)'
        }
    }

    removePink = (event) => {
        const el = event.target
        const gray = el.querySelector('.gray')
        const pink = el.querySelector('.pink')

        if(el && gray && pink) {
            gray.style.opacity = '1'
            pink.style.opacity = '0'
        }
    }

    render() {
        return(
            <div className="tech-grid">
                <div className="block" 
                    onMouseEnter={ this.showPink } 
                    onMouseMove={ this.movePink }
                    onMouseLeave={ this.removePink }
                >
                    <div className="gray">{ html }</div>
                    <div className="pink">{ htmlPink }</div>
                </div>
                <div className="block"
                    onMouseEnter={ this.showPink } 
                    onMouseMove={ this.movePink }
                    onMouseLeave={ this.removePink }
                >
                    <div className="gray">{ css }</div>
                    <div className="pink">{ cssPink }</div>
                </div>
                <div className="block"
                    onMouseEnter={ this.showPink } 
                    onMouseMove={ this.movePink }
                    onMouseLeave={ this.removePink }
                >
                    <div className="gray">{ js }</div>
                    <div className="pink">{ jsPink }</div>
                </div>
            </div>
        )
    }
}

export default Techno