import React,{Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Give from './Give.js';
import Get from './Get.js';

class Main extends Component{
	render(){
		return(<div>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home/>
					</Route>
					<Route path="/give">
						<Give/>
					</Route>
					<Route path="/get">
						<Get/>
					</Route>
				</Switch>
			</Router>
			
			</div>);
	}
}

export default Main;