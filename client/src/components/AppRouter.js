import React from 'react';
import { Switch ,Route,Redirect } from 'react-router-dom';
import {routess} from "../routes";
import {BUYER_ROUTE} from '../utils/consts';

 const AppRouter = () => {
    return (
        <Switch>
            {routess.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact/> 
            )}
            <Redirect to={BUYER_ROUTE}/>
        </Switch>
    );
 };

 export default AppRouter;