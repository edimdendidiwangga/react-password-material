const initialState = {
	data : [],
	loading: false,
}

const fetchPassword = (state, data) => {
	// return data
	let newState = {...state, data}
	// menjadi { data: [], loading:false } lalu direplace oleh data menjadi
	// { data: []}
	return newState
}

const addPassword = (state, data) => {
	// let newState = [...state, data]
  let newState = {
	 	...state,
		data: [...state.data, data]
  }
	return newState
}

const editPassword = (state, data) => {
	let newData = state.data.filter(item => { // without data before initialState
		return item.id === data.id ? data : item
	})
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const deletePassword = (state, id) => {
	let newData = state.data.filter(data => data.id != id)
	let newState = {
	 	...state,
		data: newData
  }
	return newState
}

const displayLoading = (state, bool) => {
	let newState = {
	 	...state,
		loading: bool
  }
	return newState
}

const passwordReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_PASSWORD': return fetchPassword(state, payload)
		case 'FETCH_PASSWORD_SUCCESS': return fetchPassword(state, payload)
		case 'ADD_PASSWORD': return addPassword(state, payload)
		case 'EDIT_PASSWORD': return editPassword(state, payload)
		case 'DELETE_PASSWORD': return deletePassword(state, payload)
		case 'DISPLAY_LOADING' : return displayLoading(state, payload)
			break;
		default: return state
	}
	return {
		data: []
	}
}

export default passwordReducer
