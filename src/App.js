import React from 'react'
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
        <MainPage 
          books={this.state.books}
        />      
      </div>
    )
  }
}

export default BooksApp
