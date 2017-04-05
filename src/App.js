import React, { Component } from 'react';
import './App.css';
import OneList from './List'
import InputBox from './Input'

class App extends Component {
  state = {
    listItems: []
  }

  addItem = (newItem) => {
    this.setState({
      listItems: [...this.state.listItems, {
        label: newItem,
        done: false
      }]
    })
  }

  markComplete = (i) => {
    const allItems = this.state.listItems.slice()
    allItems[i].done = !allItems[i].done
    this.setState({ listItems: allItems })
  }

  deleteItem = (i) => {
    const a = this.state.listItems.slice(0, i)
    const b = this.state.listItems.slice(i + 1)
    this.setState({listItems: a.concat(b)})
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>One List</h1>
        </header>
        <OneList items={this.state.listItems} markComplete={this.markComplete} deleteItem={this.deleteItem}/>
        <InputBox addItem={this.addItem}/>
        <footer>&copy; 2017 Cohort Seven.</footer>
      </div>
    )
  }
}

export default App;
