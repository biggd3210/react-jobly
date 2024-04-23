import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import CompanyList from '../companies/CompanyList';
import JobList from '../jobs/JobList';


function Routes() {
    return (
        <section>
            <Switch>
                <Route exact path="/companies" element={<CompanyList/>} />
                <PrivateRoute path="/companies/:id" element={<div>This is for one company</div>} />
                <PrivateRoute exact path="/jobs"element={<JobList />}/>
                <Route exact path="/login" element={<div>this is for login</div>}/>    
                <Route exact path="signup" element={<div>this is for signup</div>}/>                    
                <PrivateRoute exact path="/profile" element={<div>this is for profile</div>}/> 
                <Route exact path='/' element={<div>Welcome Home. Find your next endeavor here.</div>} />                   
                <Route path='*' element={<div>Can't seem to find that. Sorry.</div>}/>                    
            </Switch>
        </section>
    )
}

export default Routes;