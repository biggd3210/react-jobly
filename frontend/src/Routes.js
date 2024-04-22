import React, { Fragment } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

import DisplayCompanyList from './DisplayCompanyList';
import DisplayJobList from './DisplayJobList';


function Routes() {
    return (
        <section>
            <Switch>
                <Route exact path="/companies" element={<DisplayCompanyList/>} />
                <Route path="/companies/:id" element={<div>This is for one company</div>} />
                <Route exact path="/jobs"element={<DisplayJobList />}/>
                <Route exact path="/login" element={<div>this is for login</div>}/>    
                <Route exact path="signup" element={<div>this is for signup</div>}/>                    
                <Route exact path="/profile" element={<div>this is for profile</div>}/> 
                <Route exact path='/' element={<div>Welcome Home. Find jobs here.</div>} />                   
                <Route path='*' element={<div>Can't seem to find that. Sorry.</div>}/>                    
            </Switch>
        </section>
    )
}

export default Routes;