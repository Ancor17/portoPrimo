import React from 'react';
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Catalog from "./pages/Catalog";
import NavBar from "./components/NavBar";

function App() {

    return (
        <BrowserRouter>
            <NavBar/>
            <Catalog/>
        </BrowserRouter>


    );
}

export default App;
