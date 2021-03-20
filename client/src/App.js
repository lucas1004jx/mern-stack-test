import React from 'react';
import PropTypes from 'prop-types';
import jwtDecode from 'jwt-decode';
import { saveUser } from 'util/Actions/UserActions';
import { userLogOut } from 'util/Actions/AuthActions';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import {
  Route, BrowserRouter, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { Layout, PrivateRoute } from 'Components';
import {
  PostListPage, PostDetailPage, LandingPage, LoginPage, SignUpPage, ErrorPage,
} from 'Pages';

import 'bootstrap/dist/css/bootstrap.min.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1ecde2',
    },
  },
});

function App(props) {
  const { store } = props;
  if (localStorage.jwt) {
    const user = jwtDecode(localStorage.jwt);
    store.dispatch(saveUser(user));

    const currentTime = Date.now() / 1000;

    if (user.exp < currentTime) {
      store.dispatch(userLogOut());
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="w-100">
        <Provider store={store}>
          <BrowserRouter>
            <Layout>
              <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/signup" exact component={SignUpPage} />
                <PrivateRoute path="/postList" exact>
                  <PostListPage />
                </PrivateRoute>
                <PrivateRoute path="/posts/:cuid/:slug" exact>
                  <PostDetailPage />
                </PrivateRoute>

                <Route path="*" exact component={() => <ErrorPage status={404} />} />
              </Switch>

            </Layout>
          </BrowserRouter>
        </Provider>
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
