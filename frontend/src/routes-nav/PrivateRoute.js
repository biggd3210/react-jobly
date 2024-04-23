import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import UserContext from "../auth/UserContext";

/** Higher-Order Component 
 * 
 * Use PrivateRoute in place of Route where the material should be secure
 * 
 * PrivateRoute will check for currentUser.
 * If not found, redirect to login screen.
 * 
 */

function PrivateRoute({ exact, path, children }) {
    const { currentUser } = useContext(UserContext);

    if (!currentUser) {
        return <Redirect to="/login" />;
    }

    return (
        <Route exact={exact} path={path}>
            {children}
        </Route>
    )
}

export default PrivateRoute;