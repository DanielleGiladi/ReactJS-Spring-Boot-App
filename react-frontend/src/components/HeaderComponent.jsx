import React, { Component } from 'react';

class HeaderComponent extends Component {

    constructor(props){
        super(props)

        this.state={
           

        }
    }


    render() {
        return (
            <div>   
                <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a  className="navbar-brand mb-0 h1"> NBA Players App</a></div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;