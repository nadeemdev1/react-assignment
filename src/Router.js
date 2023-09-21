import Home from './components/Home';
import AllCountryContactsModal from './components/AllCountryContactsModal';
import USContactsModal from './components/USContactsModal';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/all-contacts" component={AllCountryContactsModal} /> 
        <Route exact path="/us-country" component={USContactsModal} /> 
      </Switch>
      </Router>
  );
}

export default AppRoutes;
