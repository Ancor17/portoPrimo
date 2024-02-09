import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import Catalog from "./pages/Catalog";

function App() {

    return (
        <div className="App">
            <Catalog/>
        </div>


    );
}

export default App;
