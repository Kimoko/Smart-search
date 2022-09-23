import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import {routess} from "../routes";

 const AppRouter = () => {
    return (
        <Switch>
            {routess.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/> 
            )}
        </Switch>
    );
 };

 export default AppRouter;