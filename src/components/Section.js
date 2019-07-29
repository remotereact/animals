import React from 'react';
import './Section.css';
import { Spring } from 'react-spring/renderprops'
import {Link} from "react-router-dom";
import Header from "./Header";



const Section = () => {

    return(
        <div>
            <Spring
        from={{opacity: 0, marginTop: 500}}
        to={{opacity: 1, marginTop: 0}}
        >
            {props => (
                <div style={props}>
                    <div>
                        <section id='section' >
                            <div className='item-container' >
                                <Link to="/Header"> <div className='item'><img src= {require ("../images/1.jpg")} alt="youtube"/></div>
                                    </Link>
                                <div className='item'><img src= {require ("../images/2.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/3.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/4.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/5.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/6.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/7.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/8.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/9.jpg")} alt="youtube"/></div>
                                <div className='item'><img src= {require ("../images/10.jpg")} alt="youtube"/></div>
                            </div>

                        </section>
                    </div>

                </div>
            )}
        </Spring>

        </div>




    )
};



export default Section;