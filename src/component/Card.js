// Let's make <Card text='Write the docs' /> draggable!

import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from './Constants';

/**
 * Implements the drag source contract.
 */
const cardSource = {
  beginDrag(props) {
    return {
      text: props.text
    };
  }
};

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  margin: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
}

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class Card extends React.Component{
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <div className="App" style={{ ...style, opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    );
  }
}

Card.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
