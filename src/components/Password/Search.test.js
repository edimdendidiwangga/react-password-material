import React from 'react'
import Search from './Search'
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';

describe('<Search />', () => {
  it('renders three <Search /> components', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.find(TextField)).toBeDefined()
  });
})
