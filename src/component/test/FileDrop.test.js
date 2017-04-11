import React from 'react';
import ReactDOM from 'react-dom';
import FileDrop from './../FileDrop';

import { expect } from 'chai';
import { sinon, spy } from 'sinon';
import {mount, render, shallow} from 'enzyme'

//Imagefile updated via dropping and clicking
describe('Given I have an imagedrop component', () => {

it('contains imagedrop component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FileDrop />, div);
});

});
