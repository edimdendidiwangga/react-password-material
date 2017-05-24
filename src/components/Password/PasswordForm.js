import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { addPassword } from '../../actions/passwordAction'
import Wrapper from '../Wrapper'
import {
	TextField, Paper, RaisedButton
} from '../../MaterialUI';

class PasswordForm extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form : {
				url : '',
				username : '',
				password : '',
			}
		}
	}

	handleChange(e) {
		let { name, value } = e.target
		let { form } = this.state
		let newState = { form }
		newState.form[name] = value
		this.setState(newState)
	}

	postPassword() {
		let pwd = this.state.form.password;
		let upper = /[A-Z]/.test(pwd);
		let lower = /[a-z]/.test(pwd);
		let special = /[^0-9a-zA-Z]/.test(pwd);
		let angka = /\d/.test(pwd);
		let length = pwd.length >= 5;
		var isValid = upper && lower && special && angka && length

		if( isValid ){
			let { form } = this.state
			let newPassword = {
				id: Number(new Date()),
				...form
			}
			this.props.addPassword(newPassword)
 		 this.setState({
 			 form : {
 			 	url : '',
 			 	username : '',
 			 	password : '',
 			 }
 			})
		}else{
			alert('Password is not strength enough')
		}
	}

	renderValidationText(type, text){
		let pwd = this.state.form.password
		let upper = type === 1 && /[A-Z]/.test(pwd)
		let lower = type === 2 && /[a-z]/.test(pwd)
		let special = type === 3 && /[^0-9a-zA-Z]/.test(pwd)
		let angka = type === 4 && /\d/.test(pwd)
		let length = type === 5 && pwd.length >= 5
		var result = upper || lower || special || angka || length

		const style = {
			textDecoration: result ? 'line-through' : ''
		}
		return (
			<h4 style={style}>
				{text}
			</h4>
		)
	}

	render() {
	
	return (
		<Wrapper>
		<div style={styles.container}>
			<Paper style={styles.paper} zDepth={2} >
			<div>
			<h3>Create Password</h3>
			<TextField
					floatingLabelText="Url"
					name="url"
					type="text"
					value={this.state.form.url}
					onChange={ this.handleChange.bind(this) }
				/>
					<br />
					<TextField
							floatingLabelText="Username"
							name="username"
							type="text"
							value={this.state.form.username}
							onChange={ this.handleChange.bind(this) }
						/>
					<br />
					<TextField
							floatingLabelText="Password"
							name="password"
							type="text"
							value={this.state.form.password}
							onChange={ this.handleChange.bind(this) }
						/>
					<br />
				<RaisedButton label="Save" primary={true} type="button" onClick={() => this.postPassword() }/>

			</div>

			<div>
				<h3>Password Strength:</h3>
				{this.renderValidationText(1, 'Password harus memiliki setidaknya satu karakter huruf besar (Upper-case)')}
				{this.renderValidationText(2, 'Password harus memiliki setidaknya satu karakter huruf kecil (lower-case)')}
				{this.renderValidationText(3, 'Password harus memiliki setidaknya satu karakter spesial (#$@!%...)')}
				{this.renderValidationText(4, 'Password harus memiliki setidaknya satu angka')}
				{this.renderValidationText(5, 'Password harus memiliki panjang (length) lebih dari 5 karakter')}
			</div>

			</Paper>
		</div>
		</Wrapper>
	)
}
}

const styles = {
	container: {
		display : 'flex',
		justifyContent: 'center',
	},
	paper: {
		margin: 20,
		padding: 30,
	  textAlign: 'center',
	  display: 'inline-block',
	}

};

const mapDispatchToProps = dispatch => ({
	addPassword: data => dispatch(addPassword(data))
})

export default connect(null, mapDispatchToProps)(PasswordForm)
