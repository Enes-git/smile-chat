// import React from 'react';
import Header from "./header";
import Sidebar from "./sidebar";
import Chat from "./chat";
import { useState } from "react";
import Login from './login';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {useSelector} from 'react-redux';
// import Face from './voice-recog';
import VoiceText from './voice-text';
import HandEmoji from './hand-emoji';
export default function App() {
    const user = useSelector((state)=>{
        return state && state.current_user;
    });
    console.log('user', user);
    return (
        <div className="app">
            <Router>
           {/* {user ? (  */}
                    <> 
                         <VoiceText/>
                         <HandEmoji/>
                        <Header />
                        {/* <Face /> */}
                        <div className="app__body">
                            <Sidebar />
                            <Switch>
                                <Route path="/room/:roomId">
                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <h1>Welcome</h1>
                                </Route>
                            </Switch>
                        </div>
                    </> 
                {/* ):(
                    <Login/>
                )  */}
                } 
            </Router>
        </div>
    );
}
