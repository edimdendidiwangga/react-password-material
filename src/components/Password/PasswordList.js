import React from 'react'
import { connect } from 'react-redux'
import { deletePassword, editPassword, fetchPassword } from '../../actions/passwordAction'
import PasswordEdit from './PasswordEdit'
import Search from './Search'

import {
	Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
	RaisedButton,
	CircularProgress,
	Dialog,
	FlatButton,
	GridList,
} from '../../MaterialUI';

class PasswordList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			form : {
				id: 0,
				url : '',
				username : '',
				password : '',
			},
			state: {
				open :false
			},
			query :''

		}
	}
	searchNews(event) {
			this.setState({query: event.target.value})
	}

	componentDidMount() {
		this.props.fetchPassword()
	}

	handleChange(e) {
		let { name, value } = e.target
		let { form } = this.state
		let newState = {
			form: {
				...form
			}
		}
		newState.form[name] = value
		this.setState(newState)
	}

	handleOpen = () => {
    this.setState({open: true});
  };
	handleClose = () => {
    this.setState({open: false});
  };

	renderEditForm(){
		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onTouchTap={ ()=>{
						this.handleClose()
						this.props.editPassword(this.state.form)
						
					}
				}
      />,
    ];

    return (
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={true}
          open={this.state.open}
        >

        <PasswordEdit {...this.state.form}
					handleChange={this.handleChange.bind(this)}/>
        </Dialog>
    );
	}

	renderTBody() {
		let filteredData = this.props.passwords.data.filter((x) => {
				let regex = new RegExp(this.state.query, 'gi')
				return regex.test(x.password)
		})
		return (
			<TableBody
				displayRowCheckbox={false}>
				{ filteredData.map(item => (
	      <TableRow key={item.id}>
	        <TableRowColumn>{item.id}</TableRowColumn>
	        <TableRowColumn>{item.url}</TableRowColumn>
	        <TableRowColumn>{item.username}</TableRowColumn>
					<TableRowColumn>{item.password}</TableRowColumn>
					<TableRowColumn>
					<RaisedButton label="Edit" primary={true} type="button"
						onClick={() => {
							this.handleOpen()
							this.setState({
								form: {
									id: item.id,
									url: item.url,
									username: item.username,
									password: item.password
								}
							})
						}}/> | <RaisedButton label="Delete" secondary={true} type="button" onClick={() => this.props.deletePassword(item.id) }/>
					</TableRowColumn>
	      </TableRow>
				))}
			</TableBody>
		)
	}

	render() {
	return (
		<div style={styles.root}>

		<GridList
			cols={0}
			cellHeight={0}
			padding={0}
			style={styles.gridList}
		>

		<Table>

		  <TableHeader
				displaySelectAll={false}
				displayRowCheckbox={false}>
				<TableRow>
          <TableHeaderColumn colSpan="5" tooltip="Search Password" style={{textAlign: 'right'}}>
            <Search handleSearchChange={this.searchNews.bind(this)}/>
          </TableHeaderColumn>
        </TableRow>
		    <TableRow>
		      <TableHeaderColumn>ID</TableHeaderColumn>
		      <TableHeaderColumn>URL</TableHeaderColumn>
		      <TableHeaderColumn>USERNAME</TableHeaderColumn>
					<TableHeaderColumn>PASSWORD</TableHeaderColumn>
					<TableHeaderColumn>ACTION</TableHeaderColumn>
		    </TableRow>
		  </TableHeader>
			{ this.renderTBody() }
		</Table>
		</GridList>

		{
			this.renderEditForm()
		}

		</div>
	)
}
}
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 1100,
    height: 800,
    overflowY: 'auto',
  },
};
const mapStateToProps = state => ({
	passwords: state // tadinya array , sekarang menjadi object {data, loading}
})
const mapDispatchToProps = dispatch => ({
	fetchPassword : () => dispatch(fetchPassword()),
	deletePassword: (id) => dispatch(deletePassword(id)),
	editPassword : data => dispatch(editPassword(data)),
})
// export default PasswordForm
export default connect(mapStateToProps, mapDispatchToProps)(PasswordList)
