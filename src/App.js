import React from 'react'
// import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <MainPage />      
      </div>
    )
  }
}

export default BooksApp
