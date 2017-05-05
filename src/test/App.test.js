import React from 'react';
import ReactDOM from 'react-dom';
import App from './../App';
import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import {mount, render, shallow} from 'enzyme'


describe('<App />', () => {

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});


// it('renders welcome message', () => {
//   const wrapper = shallow(<App />);
//   const welcome = <h2>Welcome to React</h2>;
//   expect(wrapper.contains(welcome)).to.equal(true);
//   // expect(wrapper.contains(welcome)).toEqual(true);
// });

});
