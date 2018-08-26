import React, { Component } from 'react';
import HomePage from "./components/HomePage";
import ManagerView from "./components/ManagerView"
import ManagerViewtwo from "./components/ManagerView2"

class App extends Component {
 


    render() {
        return (
            <div>
                <HomePage/>
                <h2>Administrador</h2>
                <ManagerView />
                <ManagerViewtwo/>
            </div>
        );
    }
}

export default App;
