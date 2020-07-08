import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Biography from './pages/Biography/biography'
import Main from './pages/Main/Main'

const Routes= () =>(
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path="/biographies/:id" component={Biography}/>
    </Switch>
    </BrowserRouter>
)

export default Routes;