import React from 'react'
import PasswordEdit from './PasswordEdit'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import store from '../../store'

describe('<PasswordForm />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><PasswordEdit /></Provider>)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

	// test(`should start with default state`, () => {
  //   let form = wrapper.state().form
  //   expect(form).toEqual({
	// 		id: 0,
	// 		url : '',
	// 		username : '',
	// 		password : '',
	// 	})
  // })


})
