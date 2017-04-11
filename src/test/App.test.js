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

});
