import React  from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {  spring, AnimatedSwitch } from 'react-router-transition';

//Pages
import App from './App';
import Home from './pages/Home';
import Classic from './pages/Classic';
import Customized from './pages/Customized';

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};
const AppRoutes = () =>
  (<App>
    <Router>
      <AnimatedSwitch
        atEnter={ bounceTransition.atEnter }
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        className="switch-wrapper">
        <Route path="/classic" component={Classic} />
        <Route path="/customized" component={Customized} />
        <Route path="/" exact component={Home} />
      </AnimatedSwitch>
    </Router>
  </App>
);

export default AppRoutes;
