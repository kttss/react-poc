import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';

import './App.css';

import Header from './../Header/Header';
import Menu from './../Menu/Menu';
import TicketPage from './../../pages/TicketPage/TicketPage';
import TodoPage from './../../pages/TodoPage/TodoPage';
import HomePage from './../../pages/HomePage/HomePage';
import PageNotFound from './../../pages/PageNotFound/PageNotFound';
import Container from './../Container/Container';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Toolbar />
        <Container>
          <Menu />
          <main>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/tickets" exact component={TicketPage} />
              <Route path="/todos" exact component={TodoPage} />
              <Route component={PageNotFound} />
            </Switch>
          </main>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
