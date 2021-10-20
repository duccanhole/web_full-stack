import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from './component/data';
import home from './component/home';
import add from './component/add';
import edit from './component/edit';

function App() {
  return (
    <div>
      <Router>
        <ul class="nav bg-secondary">
          <li class="nav-item">
            <Link to="/" className="nav-link text-light">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/data" className="nav-link text-light">View Data</Link>
          </li>
          <li class="nav-item">
            <Link to="/add" className="nav-link text-light">Add data</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/edit/:id' component={edit} />
          <Route path='/add' component={add} />
          <Route path='/data' component={data} />
          <Route path='/' component={home}/> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
