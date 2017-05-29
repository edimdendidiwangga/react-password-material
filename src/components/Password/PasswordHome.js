import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import {
	AppBar,
	Drawer,
	MenuItem,
} from '../../MaterialUI';

import PasswordList from './PasswordList'
import { fetchPassword } from '../../actions/passwordAction'

class PasswordHome extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			open : false
		}
	}

	componentWillMount() {
		this.props.fetchPassword()
	}

	openDrawer(){
		this.setState({open:true})
	}
	
  render() {
    return (
	      	<div>
						<AppBar
							title="Password Manager"
							iconClassNameRight="muidocs-icon-navigation-expand-more"
							onLeftIconButtonTouchTap={()=>this.openDrawer()}
						/>
						<PasswordList />
						<Drawer
							docked={false}
							open={this.state.open}
							onRequestChange={(open)=>this.setState({open})}
							>
			        <Link to="/"><MenuItem>Home</MenuItem></Link>
			        <Link to="/new"><MenuItem>Password Form</MenuItem></Link>
		        </Drawer>
	      	</div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
	fetchPassword: () => dispatch(fetchPassword())
})

export default connect(null, mapDispatchToProps)(PasswordHome);
