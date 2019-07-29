import React from 'react';
import Header from "./Header";
import Section from "./Section";
import Animal from "./animals";
import './App.css';
import { BrowserRouter,Route} from "react-router-dom";



const App = () =>{

    return(
        <div>
        <BrowserRouter>
            <div>
                <Route path='/' exact component={Header}/>
                <Route path='/section' exact component={Section}/>
                <Route path='/animals' exact component={Animal}/>
                <Section/>
                <Animal/>
            </div>
        </BrowserRouter>
        </div>
    )

};


export default App;