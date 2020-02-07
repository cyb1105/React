import React from 'react';
import { Link,Route } from 'react-router-dom';

const Post = ({match}) => {
    return(
       <h3>{match.pramas.title}</h3>
    )
}

const Posts = () => {
    return (
        <div>
            <h2>Posts</h2>
            <ul>
            <li><Link to="/Posts/java">Java programming</Link></li>
            <li><Link to="/Posts/react">React programming</Link></li>
            <li><Link to="/Posts/js">Javascript</Link></li>
            <li><Link to="/Posts/mas">microservice Architecture</Link></li>

            <Route path="/Posts/:title" component=""/>
            </ul>
        </div>
    );
};

export default Posts;