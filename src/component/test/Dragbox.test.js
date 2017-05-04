import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Box from './../Dragbox';

it('can be tested independently', () => {
  // // Obtain the reference to the component before React DnD wrapping
  // const OriginalBox = Box.DecoratedComponent;
  //
  // // Stub the React DnD connector functions with an identity function
  // const identity = el => el;
  //
  // // Render with one set of props and test
  // let root = TestUtils.renderIntoDocument(
  //   <OriginalBox name='test'
  //                connectDragSource={identity} />
  // );
  // let div = TestUtils.findRenderedDOMComponentWithTag(root, 'div');
  // expect(div.props.style.opacity).toEqual(1);
  //
  // // Render with another set of props and test
  // root = TestUtils.renderIntoDocument(
  //   <OriginalBox name='test'
  //                connectDragSource={identity}
  //                isDragging />
  // );
  // div = TestUtils.findRenderedDOMComponentWithTag(root, 'div');
  // expect(div.props.style.opacity).toEqual(0.4);
});
