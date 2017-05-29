import axios from 'axios'

export const addPassword = data => {
	return dispatch =>
	axios.post('http://localhost:4000/passwords', data)
		.then(response =>{
			return dispatch({ // next
				type : 'ADD_PASSWORD',
				payload : data
			})
		})
		.catch(error => {
			console.log(error)
		})

}

export const fetchPassword = () => {
	return dispatch =>
		axios.get(`http://localhost:4000/passwords/`)
		.then(response => {

				return dispatch({ // next
					type: 'FETCH_PASSWORD',
					payload: response.data
				})
			

		})
		.catch(error => {
			console.log(error)
		})
}


export const deletePassword = id => {
	return dispatch =>
		axios.delete(`http://localhost:4000/passwords/${id}`)
		.then(response =>{
			return dispatch({ // next
				type: 'DELETE_PASSWORD',
				payload: id
			})
		})
		.catch(error => {
			console.log(error)
		})
}

export const editPassword = data => {
	return dispatch =>
		axios.put(`http://localhost:4000/passwords/${data.id}`,
		{
			url : data.url,
			username: data.username,
			password: data.password
		})
		.then(response =>{
			return dispatch({ // next
				type: 'EDIT_PASSWORD',
				payload: data
			})
		})
		.catch(error => {
			console.log(error)
		})
}
