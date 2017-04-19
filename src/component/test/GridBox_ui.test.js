import React from 'react';
import ReactDOM from 'react-dom';
import FileDrop from './../FileDrop';

import { expect } from 'chai';
import sinon from 'sinon';
import {mount, render, shallow} from 'enzyme'

//Imagefile updated via dropping and clicking
describe('Given I have an imagedrop component', () => {

it('contains imagedrop component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileDrop />, div);
});


it('contains a rectangle', () => {
  const wrapper = shallow(<FileDrop />);
 // const rectangle =  "rectangle";
  expect(wrapper.hasClass("rectangle")).to.equal(true);
  // expect(wrapper.contains(rectangle)).toEqual(true);
});

it('rectangle width and height can be set arbitrarily', () => {
const wrapper = mount(<FileDrop width={10} height={12} />);
expect(wrapper.prop('width')).to.equal(10);
});

it('responds to click', () => {
  // const divClicked = sinon.spy();
  const wrapper = shallow(<FileDrop />  );
  // expect(wrapper.length).to.equal(1);
  wrapper.find('div').simulate('click');
    // console.log(wrapper.state('clickCount')) // prints false
  expect(wrapper.state('clickCount')).to.be.above(0);
  // expect(divClicked.called).to.equal(true);
});

});
