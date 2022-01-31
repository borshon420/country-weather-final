import React, { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = lazy(()=> import('./components/Home'));
const CountryInfo = lazy(()=> import('./components/CountryInfo'))

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/country" exact component={CountryInfo} />
          </Switch>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
