import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style/home.css';

class Home extends Component{
	state={
		login_state:false,
		signUp_state:false,
	}
	toggleLogin=()=>{
		this.setState({login_state:!this.state.login_state});
	}
	toggleSignUp=()=>{
		this.setState({signUp_state:!this.state.signUp_state});
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		console.log(e.target.elements.password.value) 
		if(e.target.elements.password.value==="hi"){
			this.toggleLogin();
		}

	}
	render(){
		return(
		<div className="home_body">
		<Dialog
      		open={this.state.login_state}
      		onClose={this.toggleLogin}
    	>
    		<DialogContent className="login_dialog">
    			<h3>Please Enter Below Details</h3>
    			<form className="login_form" onSubmit={this.handleSubmit}>
    				<label for="user_name">User Name</label>
    				<input id="user_name" placeholder="Enter your UserName" className="login_input"></input>
    				<label for="password">Password</label>
    				<input id="password" type="password" placeholder="Enter your password" className="login_input"></input>
    				<div className="login_submit_div">
    					   <button className="login_cancel" onClick={this.toggleLogin}>Cancel</button>
    					<button className="login_submit"  type="submit">Login</button>
    				</div>
    			</form>
    		</DialogContent>
      	</Dialog>
		<Dialog
			className="signUp_dialog"
      		open={this.state.signUp_state}
      		onClose={this.toggleSignUp}
    	>
    		<DialogContent className="signup_dialog">
    			<h3>Please Enter Below Details</h3>
    			<form className="submit_form" onSubmit={this.handleSubmit}>
    				<label for="user_name">User Name:</label>
    				<input id="user_name" placeholder="Enter your UserName" className="submit_input"></input>

    				<label for="e-mail">E-mail:</label>
    				<input id="e-mail" type="email" placeholder="Enter Your E-mail" className="submit_input"></input>

    				<label for="mobile_num">Mobile No:</label>
    				<input id="mobile_num" placeholder="Enter your Mobile Number" className="submit_input"></input>

    				<label for="address">Address:</label>
    				<input id="address" placeholder="Enter your Address" className="submit_input"></input>

    				<label for="password">Password:</label>
    				<input id="password" type="password"  placeholder="Enter your password" className="submit_input"></input>

    				<label for="conform_password">Conform Password:</label>
    				<input id="conform_password" type="password"  placeholder="One more time please" className="submit_input"></input>

    				<div className="submit_submit_div">
    					<button className="submit_cancel" onClick={this.toggleSignUp}>Cancel</button>
    					<button className="submit_submit" type="submit">Submit</button>
    				</div>
    			</form>
    		</DialogContent>
      	</Dialog>
					<div className='home_container'>
						<div className="intro">
							<h1 style={{fontSize:'5em',color:"#00B4D8"}}>BENCH</h1><h1 style={{fontSize:'5em',color:'#EB1E4E'}}>FORTH</h1>
							<b><p style={{padding:"10px",paddingLeft:"60px"}}>-Books For Everyone</p></b>
							<p className="short_dic">short discription:<br/> BENCH FORTH is the startUp ,we are selling the second_hand books in online meadium . here you can donate, buy, sell the books</p>
							
						</div>

						<div className="starting">
							<nav className="nav_bar">
								<button className="login" onClick={this.toggleLogin}>login</button>
								<button className="signUp" onClick={this.toggleSignUp}>signUp</button>
							</nav>
							<div className="giveget_div">
								<button className="give"><Link className="links" to="/give">Give</Link></button>
								<button className="get"><Link className="links" to="/get">Get</Link></button>
							</div>
						</div>
						
					</div>

			</div>);
	}
}

export default Home;