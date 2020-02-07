import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Header from './components/header';
import Posts from './routes/Posts';
import Login from './routes/Login';
import MyProfile from './routes/MyProfile';
import Search from './routes/Search';
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about/:userid" component={About} />
      <Route path="/Posts" component={Posts} />
      <Route path="/Login" component={Login} />
      <Route path="/MyProfile" component={MyProfile} />
      <Route path="/Search" component={Search} />
      <Route component={NotFound}/>
      </Switch>
    </Router>
  );
};

export default App;

