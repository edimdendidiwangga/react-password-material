import React from 'react'
import PasswordList from './PasswordList'
import { shallow } from 'enzyme'

import { Provider } from 'react-redux'
import store from '../../store'

describe('<PasswordList />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><PasswordList /></Provider>)
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

	test(`should state changed when input has been changed`, () => {
    let e = {
      target: {
        name: 'url',
        value: 'http://www.facebook.com'
      }
    }
    wrapper.instance().handleChange(e)
    let form = wrapper.state().form
    expect(form.url).toEqual('http://www.facebook.com')

    e = {
      target: {
        name: 'username',
        value: 'edim'
      }
    }
    wrapper.instance().handleChange(e)
    form = wrapper.state().form
    expect(form.username).toEqual('edim')

    e = {
      target: {
        name: 'password',
        value: '1234'
      }
    }
    wrapper.instance().handleChange(e)
    form = wrapper.state().form
    expect(form.password).toEqual('1234')

    expect(form).toEqual({
      url: 'http://www.facebook.com',
      username: 'edim',
      password: '1234',
      createdAt: null,
      updatedAt: null
    })
  })

})
