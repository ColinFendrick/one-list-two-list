import React, { Component } from 'react'

class InputBox extends Component {
  _submit = (event) => {
    event.preventDefault()
    this.props.addItem(this.refs.toDoList.value)
    this.refs.toDoList.value=''
  }

  render () {
    return (
      <form onSubmit={this._submit}>
        <input type='text' ref='toDoList'/>
      </form>
    )
  }

}

export default InputBox
