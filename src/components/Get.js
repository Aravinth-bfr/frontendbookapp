import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import SearchIcon from '@material-ui/icons/Search';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import './style/get.css';
import axios from 'axios';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import {Transition,animated} from 'react-spring/renderprops';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class Get extends Component{
	state={
		login_state:false,
		signUp_state:false,
		alt_data:[],
		alt2_data:[],
		filtered_data:[],
		search_data:"",
		data:[],
		no_data:false,
		filter_state:false,
		start_price:5,
		end_price:10000,
	}
	handleSearch=(e)=>{
		this.setState({search_data:e.target.value})
	}
	submitSearch=(e)=>{
		e.preventDefault();
		var ans=null;
		var val=this.state.data.filter(x=>x.book_name.indexOf(this.state.search_data)>-1);
		this.setState({filtered_data:val},()=>{
		if(this.state.search_data===""){
			this.setState({alt_data:this.state.data});
			this.setState({alt2_data:this.state.data});
			this.setState({no_data:false});
		}
		else if(this.state.filtered_data.length===0){
			this.setState({alt_data:[]});
			this.setState({alt2_data:[]});
			this.setState({no_data:true});
		}
		else if(this.state.filtered_data.length>0){
			this.setState({alt_data:this.state.filtered_data});
			this.setState({alt2_data:this.state.filtered_data});
			this.setState({no_data:false});
		}
		})




	}

	componentDidMount(){
		axios.get('https://bookapp4352093.herokuapp.com/apiusers/').then(res=>{
			this.setState({data:res.data});
			this.setState({alt_data:res.data})
		})
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
	filtering=()=>{
		this.setState({filter_state:!this.state.filter_state})
	}
	setStartprice=(e)=>{
		this.setState({start_price:e.target.value});
		this.setState({alt_data:this.state.alt2_data})

	}
	setEndprice=(e)=>{
		this.setState({end_price:e.target.value});
		this.setState({alt_data:this.state.alt2_data})
	}
	submitFilter=(e)=>{
		e.preventDefault();
		
		var filtered_val=this.state.alt_data.filter(x=> (x.price>=this.state.start_price) && (x.price<=this.state.end_price))
		
		this.setState({alt_data:filtered_val});
	}

	filterCancel=(e)=>{
		e.preventDefault();
		this.setState({filter_state:false});

	}
	filterSubmit=(e)=>{
		this.setState({filter_state:false});
	}
	render(){

		return(
			<div>
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
    				<input type="password" id="password" placeholder="Enter your password" className="login_input"></input>
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
      	<div className="get_body">
				<nav className="nav_bar">

					<div className="filter_field">
						<button style={{color:"black"}} onClick={this.filtering} className="filter_button">filter{this.state.filter_state?<ArrowDropDownIcon/>:<ArrowRightIcon/>}</button>
						<div className="animated_filter">
							<Transition
  						    	items={this.state.filter_state}
  						    	from={{ display:"none",opacity:0 }}
  						    	enter={{ display:"block" ,opacity:1}}
  						    	leave={{display:"none",opacity:0}}>
  							{show => show && (props => <div style={props}><div className="filter_box">
  																						<form onSubmit={this.submitFilter}>
  																							<h4>price</h4>
  																							<label for="from">from:</label>
  																							<input onChange={this.setStartprice} id="from" placeholder="start price" type="number"></input>
  																							<label for="to">to:</label>
  																							<input onChange={this.setEndprice} id="to" placeholder="end price" type="number"></input>
  																							<div>
  																								<button className="filter_cancel_button" type="button" onClick={this.filterCancel}>cancel</button>
  																								<button type="submit" className="filter_submit_button" onClick={this.filterSubmit}>filter</button>
  																							</div>
  																						</form>
  																					</div>
  														</div>)}
 						</Transition>
						</div>
					</div>
					<div>
						<form sytle={{fontColor:"black"}} className="search_field" onSubmit={this.submitSearch} >
							<input id="search_icon" className="search_input" onChange={this.handleSearch} type='text'>
							</input>
							<label for="search_icon">
								<button sytle={{color:"black"}} className="search_submit" type="submit" ><SearchIcon sytle={{color:"black"}} /></button>
							</label>
						</form>
					</div>
					<div>
					<button className="login" onClick={this.toggleLogin}>login</button>
					<button className="signUp" onClick={this.toggleSignUp}>signUp</button>
					</div>
				</nav>
				<div className="get_container">
				<div className="collection_div">

				{
				this.state.alt_data.map(x=>(<div className="collection_container">
					<div>
						<img src={x.image} alt="image" className="book_image"/>
					</div>
					<div className="collection_items">
					<h3 className="heading">{x.book_name}</h3>
						<b><p>{x.book_genre}</p></b>
						<p style={{color:'green'}}>{x.price} ₹</p>
						<p>{x.discription}</p>
						<button className="buy_button">Buy</button>
					</div>
					</div>
					))
				}
				{
					this.state.no_data?(<div className="nothing_found">
												<h1>Sorry , nothing found </h1>
												<SentimentVeryDissatisfiedOutlinedIcon style={{fontSize:100}}/>
										</div>):""
				}
				</div>
				</div>
			</div>
			</div>
			);
	}
}

export default Get;