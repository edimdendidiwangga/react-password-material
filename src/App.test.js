import React from 'react'
import App from './App'
import { shallow, mount } from 'enzyme'

import {
	MuiThemeProvider,
} from './MaterialUI';

describe('<App />', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test('renders without crashing', () => {
    expect(wrapper).toBeDefined()
  });

  test('should render MuiThemeProvider  ', () => {
    expect(wrapper.containsAllMatchingElements([
      <MuiThemeProvider />
    ])).toBeDefined()
  });


})
