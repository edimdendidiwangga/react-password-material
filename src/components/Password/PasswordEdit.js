import React from 'react'
import { addPassword } from '../../actions/passwordAction'

class PasswordEdit extends React.Component{
	constructor(props){
		super(props)
	}

	// handleChange(e) {
	// 	let { name, value } = e.target
	// 	let { form } = this.state
	// 	let newState = {
	// 		form: {
	// 			...form
	// 		}
	// 	}
	// 	newState.form[name] = value
	// 	this.setState(newState)
	// }

	postPassword() {
		let { form } = this.state
		// let { data } = this.props
		let { passwords } = this.props
		let newPassword = {
			id: passwords.length ? passwords[passwords.length-1].id+1 : 1,
			...form
		}
		this.props.addPassword(newPassword)
	}

	render() {
		console.log('saya lagi datang')
	return (
		<div>
			<form>
				<label>
					Url
				</label>
				<input
					name="url"
					type="text"
					value={this.props.url}
					onChange={ this.props.handleChange.bind(this) }/>
					<br />
				<label>
					Username
				</label>
				<input
					name="username"
					type="text"
					value={this.props.username}
					onChange={ this.props.handleChange.bind(this) }/>
					<br />
				<label>
					Password
				</label>
				<input
					name="password"
					type="text"
					value={this.props.password}
					onChange={ this.props.handleChange.bind(this) }/>
					<br />

			</form>
		</div>
	)
}
}

// export default PasswordForm
export default PasswordEdit
