import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import NewUser from './NewUser';
import Student from './Register/Student';
import Teacher from './Register/Teacher';

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Home} />
      <Route path="/newuser" exact component={NewUser} />
      <Route path="/teacher" exact component={Teacher} />
      <Route path="/student" exact component={Student} />
    </BrowserRouter>
  );
}
