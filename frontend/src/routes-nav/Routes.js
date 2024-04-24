import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';
import LoginForm from '../auth/LoginForm';
import CompanyDetail from '../companies/CompanyDetail';
import ProfileForm from '../profiles/ProfileForm';
import Homepage from '../homepage/Homepage';
import SignupForm from '../auth/SignupForm';


function Routes({ login, signup }) {
    return (
        <section>
            <Switch>
                <Route exact path='/'>
                    <Homepage />
                </Route>
                
                <Route exact path="/login">
                    <LoginForm login={login}/>
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup} />
                </Route>

                <Route exact path="/companies">
                    <CompanyList />
                </Route>

                <PrivateRoute path="/companies/:handle">
                    <CompanyDetail />
                </PrivateRoute>

                <PrivateRoute exact path="/jobs">
                    <JobList />
                </PrivateRoute>
                                       
                <PrivateRoute exact path="/profile">
                    <ProfileForm />
                </PrivateRoute>                  
                <Route path='*'>
                    <div>Can't seem to find that. Sorry.</div>
                </Route>            
            </Switch>
        </section>
    )
}

export default Routes;