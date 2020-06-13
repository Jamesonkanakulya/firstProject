import React, { Component } from 'react'
import logo from '../images/logo.svg'
import { FaAlignRight} from 'react-icons/fa';

import {Link} from 'react-router-dom'

class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             navOpen:false
        }
    }

    handleToggle= () =>{
        this.setState({
            navOpen:!this.state.navOpen
        })
    }
    
    render() {
        return (
            <nav className="navbar">
                <div className= "navCenter">
                    
                        <Link to="/" className = "navHeader">
                            <img src={logo} alt="Beach Resort"/>
                        </Link>
                  
                    <div className={this.state.navOpen?"navigation show-nav":"navigation hide-nav"}>
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                    </div>
                   

                    <button className="react-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                    </button>
                </div>
               
                
            </nav>
        )
    }
}

export default React.memo( Navbar)
