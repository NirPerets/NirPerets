import { Component } from "react";
import Logo from "./Logo";

class Loading extends Component {
    render() {
        return(
            <div className="loading-screen">
                <div>
                    <Logo />
                    <div className="loading-bar">
                        <div className="loaded"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading