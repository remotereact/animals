import React, {Component} from 'react';
import {connect} from "react-redux";
import './animal.css';


class Animal extends Component {


    renderAnimal(animalData) {
        return (
            <div className='dogs-grid'>
                <img src={animalData[0].url} alt=""/>
            </div>
        )
    }

    render() {


        return (
            <div>
                {this.props.animal.map(this.renderAnimal)}
            </div>
        )
    }
}

function mapStateToProps({animal}) {
    return {animal};
}

export default connect(mapStateToProps)(Animal);