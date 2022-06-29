import { Component } from 'react'
import Logo from './Logo'
import Social from './Social'
import CvDownload from '../Nir_Perets_FrontEnd_CV.pdf'

class Sidebar extends Component {

    slideToPorfolio = () => {
        const el = document.querySelector('.portfolio-container')
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }  

    slideToSkills = () => {
        const el = document.querySelector('.cv')
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }  

    slideToContact = () => {
        const el = document.querySelector('.contact-container')
        console.log(el)
        if(el) el.scrollIntoView({ behavior: 'smooth', block: 'center'})
    }  

    render() {
        return(
            <div className="sidebar-container">
                <Logo />
                <div className="sidebar">
                    <li><a onClick={ this.slideToPorfolio }>Portfolio</a></li>
                    <li><a onClick={ this.slideToSkills }>Skills</a></li>
                    <li><a onClick={ this.slideToContact }>Contact</a></li>
                    <li><a href={ CvDownload } download>CV</a></li>
                </div>
                <Social />
            </div>
        )
    }
}

export default Sidebar