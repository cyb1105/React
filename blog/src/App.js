import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PostNew from './components/posts_new';
import PostShow from './components/posts_show';
import PostIndex from './components/posts_index';
function App() {
  return (
     
        <Router>
          <div>
            <Switch>
              <Route path="/blogs/new" component ={PostNew} />
              <Route path="/blogs/:id" component ={PostShow}/>
              <Route exact path='/' component = {PostIndex} />
            </Switch>
          </div>
        </Router>
         
    
  );
}

export default App;
