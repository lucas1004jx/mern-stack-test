import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PostListPage from 'Pages/PostListPage/PostListPage';
import PostDetailPage from 'Pages/PostDetailPage/PostDetailPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'Components/Nav/Navbar';
import LoginPage from 'Pages/LogInPage/LoginPage';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ecde2',
    },
  },
});

function App(props) {
  const { store } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className="w-100">
        <Navbar />
        <div className="w-100 pt-5 mt-5">
          <Provider store={store}>
            <BrowserRouter>
              <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/postList" exact component={PostListPage} />
                <Route path="/posts/:cuid/:slug" exact component={PostDetailPage} />
              </Switch>
            </BrowserRouter>
          </Provider>
        </div>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
