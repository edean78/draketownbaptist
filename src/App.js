import React, { Components } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootswatch/dist/superhero/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Pastors from './Pages/Pastors';
import Ministries from './Pages/Ministries';
import Sermons from './Pages/Sermons';
import Watch from './Pages/Watch';
import Missionaries from './Pages/Missionaries';
import Calendar from './Pages/Calendar';
import ContactUs from './Pages/ContactUs';

const App = () => {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/our_pastors' component={Pastors} />
            <Route path='/ministries' component={Ministries} />
            <Route path='/sermons' component={Sermons} />
            <Route path='/watch' component={Watch} />
            <Route path='/missionaries' component={Missionaries} />
            <Route path='/calendar' component={Calendar} />
            <Route path='/contact_us' component={ContactUs} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;