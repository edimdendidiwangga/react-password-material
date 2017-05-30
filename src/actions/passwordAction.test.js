import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'

import * as actions from './passwordAction'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Test passwordAction', () => {

  test('creates FETCH_PASSWORDS when fetching done', async () => {
    let payload = await axios.get(`http://localhost:4000/passwords`)
          .then(res => {
            return res.data
          })

    const expectedActions = [{
      type: 'FETCH_PASSWORDS',
      payload
    }]

    const store = mockStore()

    return store.dispatch(actions.fetchPasswords())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })

  })

})
