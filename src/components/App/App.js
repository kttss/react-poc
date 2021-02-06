import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './../Header/Header';
import TicketPage from './../../pages/TicketPage/TicketPage';
import TodoPage from './../../pages/TodoPage/TodoPage';
import HomePage from './../../pages/HomePage/HomePage';
import PageNotFound from './../../pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/tickets" exact component={TicketPage} />
          <Route path="/todos" exact component={TodoPage} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
