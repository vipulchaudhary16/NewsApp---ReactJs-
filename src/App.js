import './App.css';
//rcc
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div style={
                {
                    background: "#233b3d",
                    height: "auto",
                    overflow: "auto"
                }
            }>
                <div>
                    <Router>
                        <Navbar></Navbar>
                        <Switch>
                            <Route exact path="/"> <News key="general" pageSize={12} country={"in"} category="general" /> </Route>
                            <Route exact path="/business"> <News key="business" pageSize={12} country={"in"} category="business" /> </Route>
                            <Route exact path="/entertainment"> <News key="entertainment" pageSize={12} country={"in"} category="entertainment" /> </Route>
                            <Route exact path="/health"> <News key="health" pageSize={12} country={"in"} category="health" /> </Route>
                            <Route exact path="/science"> <News key="science" pageSize={12} country={"in"} category="science" /> </Route>
                            <Route exact path="/technology"> <News key="technology" pageSize={12} country={"in"} category="technology" /> </Route>
                            <Route exact path="/sports"> <News key="sports" pageSize={12} country={"in"} category="sports" /> </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

// 153e3212c9b58127f58a17aae8fe1569a2