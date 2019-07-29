import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchAnimals} from "../actions";
import {bindActionCreators} from 'redux';
import './Header.css';


class Calling_action extends Component {

// action fetched the data
    onClick = (event) => {
        this.props.fetchAnimals()
    };

    render() {
        return (
            <div>
                <a onClick={this.onClick} href="#what" className='btn'>READ MORE!</a>
            </div>
        )
    }
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchAnimals}, dispatch)
}

export default connect(null, mapDispatchToProps)(Calling_action);
















