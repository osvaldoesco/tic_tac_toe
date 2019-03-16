import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

//Pages
import App from './App';
import Home from './pages/Home';
import Classic from './pages/Classic';
import Customized from './pages/Customized';

const atEnter = {
    opacity: 0,
    scale: 1.2,
  }

const AppRoutes = () =>
  (<App>
    <AnimatedSwitch
      atEnter={ atEnter }
      atLeave={atEnter}
      atActive={atEnter}
      className="switch-wrapper">
      <Route path="/classic" component={Classic} />
      <Route path="/customized" component={Customized} />
      <Route path="/" exact component={Home} />
    </AnimatedSwitch>
  </App>
);

export default AppRoutes;
