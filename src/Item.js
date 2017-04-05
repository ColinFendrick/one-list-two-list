import React, { Component } from 'react';

class Item extends Component {
  _onClick = () => {
    this.props.markComplete(this.props.index)
  }

  _dblClick = () => {
    this.props.deleteItem(this.props.index)
  }

  render () {
    return <li onClick={this._onClick} onDoubleClick={this._dblClick} className={this.props.done ? 'completed' : ''}> {this.props.label}
    </li>
  }
}

export default Item
