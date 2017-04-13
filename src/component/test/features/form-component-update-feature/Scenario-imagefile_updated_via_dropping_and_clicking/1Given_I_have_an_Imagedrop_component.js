//'Given I have an imagedrop component'
import React from 'react';
import ReactDOM from 'react-dom';
import FileDrop from './../FileDrop';

import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import {mount, render, shallow} from 'enzyme'

//Imagefile updated via dropping and clicking
//
describe('A rectangle that can replace an image with width and height', () => {

it('contains imagedrop component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileDrop />, div);
});


it('contains a rectangle', () => {
  const wrapper = shallow(<FileDrop />);
  const rectangle = rectangle;
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(rectangle)).toEqual(true);
});

it('rectangle width and height can be set arbitrarily', () => {

});

it('responds to drag n drop', () => {

});

});


describe('when I click', () => {

  it('responds to click', () => {

  });

});


describe('')
