import { Component } from "react";
import Linkedin from '../Icons/Linkedin'
import whatsapp from '../Icons/whatsap'
import Git from '../Icons/Git'

class Social extends Component {
    render() {
        return(
            <div className="social-menu">
                <a target='_blank' href="https://www.linkedin.com/in/nir-perets-7996011b9/">{ Linkedin }</a>
                <a target='_blank' href="https://api.whatsapp.com/send?phone=972503036431">{ whatsapp }</a>
                <a target='_blank' href="https://github.com/NirPerets">{ Git }</a>
            </div>
        )
    }
}

export default Social