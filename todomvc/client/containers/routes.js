import React from 'react';
import { Router, Route } from 'react-router';

import QuesApp from './QuesApp';
import QuizApp from './QuizApp';
import SingleApp from './SingleApp';



export default (
	<Router>
    <Route path="/" component={QuesApp}/>

	<Route path="quiz/" component={QuizApp}/>
	<Route path="quiz/:id" component={SingleApp}/>
    </Router>
)