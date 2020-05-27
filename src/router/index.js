import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, Data, Add, Edit } from '../pages';


export default function index() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/data" exact component={Data} />
                    <Route path="/add" exact component={Add} />
                    <Route path="/edit" exact component={Edit} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
