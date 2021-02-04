import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import UseEffectEx from './components/pages/UseEffectEx/UseEffectEx';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import UseStateEx from "./components/pages/UseStateEx/UseStateEx";

function App() {
    return (
        <div>
            <BrowserRouter>
                <HeaderBar/>
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/namelist-useState">
                        <UseStateEx/>
                    </Route>
                    <Route path="/namelist-useEffect">
                        <UseEffectEx/>
                    </Route>
                    <Route path="/">
                        <Home/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
