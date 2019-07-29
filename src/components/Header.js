import React, {Component} from 'react';
import './Header.css';
import {connect} from "react-redux";
import {fetchAnimals} from "../actions";
import {bindActionCreators} from 'redux';
import {Spring} from 'react-spring/renderprops';

class Header extends Component {

// action fetched the data
    onClick = (event) => {
        this.props.fetchAnimals()
    };

    render() {
        return (
            <div>
                <header id='showcase'>


                    <div className='showcase-content'>


                        <Spring
                            from={{opacity: 0,marginLeft: -500}}
                            to={{opacity: 1,marginLeft: 0}}
                        >
                            {props => (
                                <div style={props}>

                                    <div>
                                        <h1 className='l-heading'>
                                            Beautiful animals!
                                        </h1>
                                        <p className='lead'>
                                            but this one is little bit scary!
                                        </p>
                                        <a onClick={this.onClick} href="#what" className='btn'>READ MORE!</a>
                                        <a href="#what" className='btn'>Community</a>
                                        <a href="#what" className='btn'>Twitter</a>
                                    </div>
                                </div>
                            )}

                        </Spring>

                    </div>


                    <Spring
                        from={{opacity: 0,marginTop: -500}}
                        to={{opacity: 1,marginTop: 0}}
                        config={{delay:700,duration:1000}}
                    >
                        {props => (
                            <div style={props}>
                                <img className='header-image' src={require("../images/elephants-at-sunset.jpg")}
                                     alt="animal"/>
                            </div>
                        )}

                    </Spring>


                </header>
            </div>
        )
    }
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAnimals}, dispatch)
}

export default connect(null, mapDispatchToProps)(Header);
















