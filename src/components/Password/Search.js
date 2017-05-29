import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Search extends Component {
    render() {
      return (
        <form>
				<TextField
		      hintText="Search Password...."
		      floatingLabelText="Search Password"
					onChange={this.props.handleSearchChange}
		    />
          
        </form>
      )
    }
}

export default Search;
