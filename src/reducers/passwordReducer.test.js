import passwordReducer from './passwordReducer'

let initialState = {
	data : []
}

describe('passwordReducer', () => {

  test('should return the initial state', () => {
    expect(
      passwordReducer(initialState, {})
    ).toEqual(
      initialState
    )
  })

  test('should handle FETCH_PASSWORD', () => {
    expect(
      passwordReducer(initialState, {
        type: 'FETCH_PASSWORD',
        payload: [{
          url: 'url',
          username: 'username',
          password: 'password',
        }]
      })
    ).toEqual(
      { data : [{
	        url: 'url',
	        username: 'username',
	        password: 'password',
      	}]
			}
    )
	})

	test('should handle FETCH_PASSWORD', () => {
    expect(
      passwordReducer(initialState, {
        type: 'FETCH_PASSWORD',
        payload: [{
          url: 'url',
          username: 'username',
          password: 'password',
        }]
      })
    ).toEqual(
      { data : [{
	        url: 'url',
	        username: 'username',
	        password: 'password',
      	}]
			}
    )
	})

	test('should handle ADD_PASSWORD', () => {
    expect(
      passwordReducer(initialState, {
        type: 'ADD_PASSWORD',
        payload: {
          id: 0,
          url: 'url',
          username: 'username',
          password: 'password',
        }
      })
    ).toEqual(
      { data : [{
	        id: 0,
	        url: 'url',
	        username: 'username',
	        password: 'password',
	      }]
			}
    )
  })

	test('should handle EDIT_PASSWORD', () => {
    expect(
      passwordReducer({ data : [{
	        id: 1,
	        url: 'url',
	        username: 'username',
	        password: 'password',
      	}]
			}, {
        type: 'EDIT_PASSWORD',
        payload: {
          id: 1,
          url: 'edited',
          username: 'edited',
          password: 'edited',
        }
      })
    ).toEqual(
      { data : [{
	        id: 1,
	        url: 'edited',
	        username: 'edited',
	        password: 'edited',
	      }]
			}
    )
	})

	test('should handle DELETE_PASSWORD', () => {
    expect(
      passwordReducer({ data : [{
	        id: 0,
	        url: 'url',
	        username: 'username',
	        password: 'password',
	      },{
	        id: 1,
	        url: 'www',
	        username: 'john',
	        password: 'doe',
	      }]
			}, {
        type: 'DELETE_PASSWORD',
        payload: 1
      })
    ).toEqual(
      { data : [{
	        id: 0,
	        url: 'url',
	        username: 'username',
	        password: 'password',
	      }]
			}
    )
  })

})
