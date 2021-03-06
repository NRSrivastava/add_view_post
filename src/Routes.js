import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Posts from "./components/Posts/Posts";

import CommentList from "./components/CommentList/CommentList";
import Thread from './components/Thread/Thread';

const Routes = () => (
  <Router history={history}>
    <Switch>
     
      <Route path="/post/" exact>
        <Posts />
      </Route>
      <Route path="/post/:postid/comments" component={CommentList} exact />
      <Route path="/post/comments/:commentid/thread" component={Thread} exact/>
    </Switch>
  </Router>
);
export default Routes;
