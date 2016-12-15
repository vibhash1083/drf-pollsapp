import React from 'react';
import { Router, Route } from 'react-router';

import QuesApp from './QuesApp';
import QuizApp from './QuizApp';


export default (
	<Router>
    <Route path="/" component={QuesApp}/>
	<Route path="quiz/:id" component={QuizApp}/>
    </Router>


)