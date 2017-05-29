import React from 'react'
import {
	TextField,
} from '../../MaterialUI';

class PasswordEdit extends React.Component{
	constructor(props){
		super(props)
	}

	render() {
	return (
		<div>
			<form>
			<TextField
					floatingLabelText="Url"
					name="url"
					type="text"
					value={this.props.url}
					onChange={ this.props.handleChange.bind(this) }
				/>
				<br />
				<TextField
						floatingLabelText="Username"
						name="username"
						type="text"
						value={this.props.username}
						onChange={ this.props.handleChange.bind(this) }
					/>
					<br />
				<TextField
						floatingLabelText="Password"
						name="password"
						type="text"
						value={this.props.password}
						onChange={ this.props.handleChange.bind(this) }
					/>
					<br />
			</form>
		</div>
	)
}
}

// export default PasswordForm
export default PasswordEdit
