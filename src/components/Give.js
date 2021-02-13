import React,{Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style/give.css';
import axios from 'axios';

class Give extends Component{
	state={
		login_state:false,
		signUp_state:false,
		bookName:"",
		authorName:"",
		genre:"",
		price:0,
		discription:"",
		image:null,
		donate_state:false,
	}

	changeBookname=(e)=>{
		this.setState({bookName:e.target.value});
	}
	changeAuthorname=(e)=>{
		this.setState({authorName:e.target.value});
	}
	changeDisc=(e)=>{
		this.setState({discription:e.target.value});
	}
	changePrice=(e)=>{
		this.setState({price:e.target.value});
	}
	changeGenre=(e)=>{
		this.setState({genre:e.target.value});
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
	Donated=(e)=>{
		e.preventDefault()
		

	}
	Selled=(e)=>{
		e.preventDefault()
		this.setState({donate_state:!this.state.donate_state})

	}
	imageChange=(e)=>{
		this.setState({image:e.target.files[0]})

	}
	handleDataSubmit=(e)=>{
		this.setState({donate_state:true})
		e.preventDefault()
		let form_data = new FormData();
    	form_data.append('book_name', this.state.bookName);
    	form_data.append('book_genre', this.state.genre);
    	form_data.append('author_name', this.state.authorName);
    	form_data.append('tags', "will be");
    	form_data.append('price', eval(this.state.price) + 75);
    	form_data.append('discription', this.state.discription,);
    	form_data.append('image', this.state.image,this.state.image.name);
		axios.post('https://bookapp4352093.herokuapp.com/apiusers/',form_data).then(res=>{
			console.log("submited ===>",res.data);
		}).catch(err=>console.error(err))
		this.setState({bookName:""});
		
		document.getElementById("detail_form").reset();
	}


	render(){
		console.log('aaa'.indexOf('a') > -1 )
		return(
			<div className="give_body" style={{backgroundColor: 'rgba(255,255,255,0.4)',height:"100vh"}} >

			<Dialog
			
      		open={this.state.login_state}
      		onClose={this.toggleLogin}
    	>
    		<DialogContent className="login_dialog">
    			<h3>Please Enter Below Details</h3>
    			<form className="login_form" onSubmit={this.handleSubmit}>
    				<label htmlFor="user_name">User Name</label>
    				<input id="user_name" placeholder="Enter your UserName"  className="login_input"></input>
    				<label htmlFor="password" >Password</label>
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
    				<label htmlFor="user_name">User Name:</label>
    				<input id="user_name" placeholder="Enter your UserName" className="submit_input"></input>

    				<label htmlFor="e-mail">E-mail:</label>
    				<input id="e-mail" type="email" placeholder="Enter Your E-mail" className="submit_input"></input>

    				<label htmlFor="mobile_num">Mobile No:</label>
    				<input id="mobile_num" placeholder="Enter your Mobile Number" className="submit_input"></input>

    				<label htmlFor="address">Address:</label>
    				<input id="address" placeholder="Enter your Address" className="submit_input"></input>

    				<label htmlFor="password">Password:</label>
    				<input id="password" type="password"  placeholder="Enter your password" className="submit_input"></input>

    				<label htmlFor="conform_password">Conform Password:</label>
    				<input id="conform_password" type="password" placeholder="One more time please" className="submit_input"></input>

    				<div className="submit_submit_div">
    					<button className="submit_cancel" onClick={this.toggleSignUp}>Cancel</button>
    					<button className="submit_submit" type="submit">Submit</button>
    				</div>
    			</form>
    		</DialogContent>
      	</Dialog>

				<nav className="nav_bar" >
					<div>
					<button className="login" onClick={this.toggleLogin}>login</button>
					<button className="signUp" onClick={this.toggleSignUp}>signUp</button>
					</div>
				</nav>

			<div className="give_div">

				<div className="give_container">
					<h3>Thank you for your attention</h3>
					<div className="content">
					<form id="detail_form" className="detail_form" className="content" onSubmit={this.handleDataSubmit}>
						<div className="details">
						<h4>please enter below details</h4>
						
							<label htmlFor="book_name">Book Name:</label>
							<input required className="inputs" id="book_name" onChange={this.changeBookname} placeholder="pls enter book name">
							</input>
							<select id="selection" onChange={this.changeGenre}>
								<option>genre</option>
								<option selected="selected">general</option>
								<option>Fantasy</option>
								<option>Adventure</option>		
								<option>Romance</option>		
								<option>Mystery</option>		
								<option>Horror</option>		
								<option>Thriller</option>		
                                <option>Paranormal</option>    	
								<option>Historical fiction</option>		
								<option>Science Fiction</option>
								<option>Engineering</option>		
								<option>Cooking</option>		
								<option>Art</option>		
								<option>Development</option>		
								<option>Motivational</option>		
								<option>Health</option>		
								<option>History</option>		
								<option>Travel</option>		
								<option>Families & Relationships</option>		
								<option>Humor</option>		
								<option>Children’s</option>		
							</select>
							<label htmlFor="author_name">Author Name:</label>
							<input required className="inputs" id="author_name" onChange={this.changeAuthorname} placeholder="enter author name"></input>

							<label htmlFor="disc">Description</label>
							<input required className="inputs" id="disc" onChange={this.changeDisc} placeholder="enter description"></input>
							
							<label htmlFor="image">Insert Image:</label>
    						<input required id="image" type="file" alt="Submit" onChange={this.imageChange} className="inputs" />

						
						</div>

						<div className="submit">
							<div className="detail_form">
							<h2>Do You Want Donate The Book For Free ?</h2>

							
								<button className="donate_button" >Donate Book</button>
								<p>or</p>
								<input className="selling_price" type='number' onChange={this.changePrice} placeholder="Expected Money in rs"></input>
								<button className="sell_button" >Sell</button>
								
								{ this.state.donate_state?
									<div>
									<h3>Thank You</h3>
									<div style={{fontSize:"60px"}}>🙏</div>
									</div>:""
								}
								
						
								</div>
						</div>
						</form>
					</div>



				</div>
				
			</div>

			</div>
			);
	}
}

export default Give;


