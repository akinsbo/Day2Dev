// Let's make <Card text='Write the docs' /> draggable!

import React, { PropTypes } from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './Constants'

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  margin: '.5rem',
  backgroundColor: 'white',
  cursor: 'move'
}

class Card {

  render() {
    const { isDragging, connectDragSource, text } = this.props
    return connectDragSource(
      <div style={{ ...style, opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </div>
    )
  }

}

Card.propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
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

export default DragSource(ItemTypes.CARD, cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))(Card);
