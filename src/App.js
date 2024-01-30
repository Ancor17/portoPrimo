import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";

function App() {

    const [posts, setPost] = useState([
        {id: 1, title: 'JavaScript', body: 'Discription'},
        {id: 2, title: 'JavaScript 2', body: 'Discription'},
        {id: 3, title: 'JavaScript 3', body: 'Discription'},
    ])
    const [posts2, setPost2] = useState([
        {id: 1, title: 'React', body: 'Discription'},
        {id: 2, title: 'React 2', body: 'Discription'},
        {id: 3, title: 'React 3', body: 'Discription'},
    ])

    return (

        <div className="App">
            <PostList posts={posts} title='Список постов 1'/>
            <PostList posts={posts2} title='Список постов 2'/>
        </div>

    );
}

export default App;
