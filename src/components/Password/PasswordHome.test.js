import React from 'react'
import PasswordHome from './PasswordHome'
import PasswordList from './PasswordList'
import { shallow } from 'enzyme'
import { Provider } from 'react-redux'
import store from '../../store'

import {
	AppBar,
	Drawer,
	MenuItem,
} from '../../MaterialUI';

describe('<PasswordHome />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><PasswordHome /></Provider>)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  })

	test('should render AppBar  ', () => {
    expect(wrapper.containsAllMatchingElements([
      <AppBar />,
			<PasswordList />,
      <Drawer />
    ])).toBeDefined()
  });
})
