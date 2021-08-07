import React from 'react';
import Header from './include/mainTop';
import Footer from './include/footer';
import MainPage from './main/index';
import { Switch, Route } from 'react-router-dom';
import './total.scss';
import BookingPage from './booking';
import ExhibitPage from './exhibite';
import CheckPage from './check';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact={true} component={MainPage} />
        <Route path={"/booking"} exact={true} component={BookingPage} />
        <Route path={"/exhibit"} exact={true} component={ExhibitPage} />
        <Route path={"/check"} exact={true} component={CheckPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
