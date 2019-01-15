import React, { Component } from 'react'
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routers from './routers';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        )
    }
}

render(<App />, document.getElementById('root'))