import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

// UI Components
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import SingleUser from './components/users/SingleUser';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

export default class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null,
  };
/* --------------------- For quick test -------------------------------------- */
  // conts getMan = async (username) => {
  //   const res = await fetch(`https://api.github.com/users/${username}`);
  //   const result = await res.json();
  //   console.log(result);
  // }

  /* -------------------------------------------------------------- */
  // async componentDidMount() {

  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   this.setState({ loading: false, users: res.data });
  // }

  // search github users
  searchUsers = async (text) => {
    // if(!text) return;

    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    // items it is github api (sub object in data)
    this.setState({ loading: false, users: res.data.items });
  };

  // get single user
  getUser = async (username) => {

    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, user: res.data });

  }

  // clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  // set Alert
  setAlert = (message, type) => {
    this.setState({ alert: { message, type } });

    // setTimeout(() => this.setState({ alert: null }), 5000);
  };
  // delete alert
  delAlert = () => {
    this.setState({ alert: null });
  };
  render() {
    const {alert, loading, users, user} = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />

          <div className='container'>
            <Alert alert={alert} delAlert={this.delAlert} />
            <Switch>
              <Route exact path={'/'} render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users
                      loading={loading}
                      users={users}
                    />
                  </Fragment>
                )}
              />
              <Route exact path='/about' render={About}/>

              <Route exact path='/user/:login' render={ props => (
                <SingleUser {...props} user={user} getUser={this.getUser} loading={loading}/>
              )}/>
                
              
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
