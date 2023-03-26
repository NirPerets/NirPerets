import { Component } from 'react'
import SmallTitle from './SmallTitle'

class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        activeField: '',
        errors: [],
        showModal: false,
    }

    handleInput = (e) => {
        this.setState({ [e.target.id] : e.target.value })
    }

    activateInput = (e) => {
        this.setState({
            activeField: e.target.id
        })
    } 

    deactivateInput = (e) => {
        this.setState({
            activeField: ''
        })
    } 

    validation = () => {
        let tempError = []

        if(this.state.email == '' || !this.state.email.includes('@')) {tempError.push('email')}
        if(this.state.message == '') {tempError.push('message')}

        this.setState({ errors: tempError })
    }

    submitForm = async (e) => {
        e.preventDefault()

        await this.validation()

        if(this.state.errors.length == 0) {

        } else {
            this.setState({ showModal: true })
        }
    }

    render() {
        return(
            <>
                <div className="contact-container">
                    <div className="left">
                        <SmallTitle sentence="Contact me" />
                        <p>
                            I’m interested in freelance opportunities – from business website to eCommerce to large projects. 
                            However, if you have other request or question, don’t hesitate to use the form.
                        </p>
                        <form onSubmit={this.submitForm}>
                            <div className="inputs-line">
                            <div className={"input-container " + (this.state.activeField === 'name' ? 'active' : '')}>
                                    <input
                                    id="name"
                                    type="text"
                                    placeholder="Name"
                                    name="name" 
                                    onChange={ this.handleInput } 
                                    onFocus={ this.activateInput } 
                                    onBlur={this.deactivateInput} />
                                </div>

                                <div className={"input-container " + (this.state.activeField === 'email' ? 'active' : '') + (this.state.errors.includes('email') ? ' error' : '')}>
                                    <input
                                        id="email"
                                        type="text"
                                        placeholder="Email"
                                        name="email" 
                                        onChange={ this.handleInput } 
                                        onFocus={ this.activateInput } 
                                        onBlur={this.deactivateInput} />
                                </div>
                            </div>

                            <div className={"input-container " + (this.state.activeField === 'subject' ? 'active' : '')}>
                                <input
                                    id="subject"
                                    type="text"
                                    placeholder="Subject"
                                    name="subject" 
                                    onChange={ this.handleInput } 
                                    onFocus={ this.activateInput } 
                                    onBlur={this.deactivateInput} />
                            </div>

                            <div className={"input-container " + (this.state.activeField === 'message' ? 'active' : '') + (this.state.errors.includes('message') ? ' error' : '')}>
                                <textarea
                                    id="message"
                                    type="text"
                                    placeholder="Message"
                                    name="message" 
                                    onChange={ this.handleInput } 
                                    onFocus={ this.activateInput } 
                                    onBlur={this.deactivateInput} />    
                            </div>

                            <button type="submit">Send Message</button>
                        </form>
                    </div>

                    <div className="right">
                        <div class="map-postion">
                            <p>
                                Nir Perets,<br/>
                                Israel, Herzliya<br/>
                                <span>@</span>: peretsweb@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"error-modal" + (this.state.showModal ? ' show' : '')}>
                    Please fill in all required fields
                </div>
            </>
        )
    }
}

export default Contact