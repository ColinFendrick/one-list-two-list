import React, { Component } from 'react';
import Item from './Item'

class OneList extends Component {

  render () {
    const items = this.props.items.map((item, i) => {
      return <Item label={item.label} done={item.done} markComplete={this.props.markComplete} deleteItem={this.props.deleteItem} index={i} key={i}/>
    })
    return (
      <ul className="one-list">
        {items}
      </ul>
    )
  }

}
export default OneList
