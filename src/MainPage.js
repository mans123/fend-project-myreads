import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

import Book from "./Book";

class MainPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {/* <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books => books.shelf === "currentlyReading")
                    .map(book => (
                      <li key={book.id}>
                        <Book
                            book = {book}
                            moveShelf={this.props.moveShelf}
                            currentShelf = 'currentlyReading"'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books => books.shelf === "wantToRead")
                    .map(book => (
                      <li key={book.id}>
                        <Book 
                            book = {book}
                            moveShelf={this.props.moveShelf}
                            currentShelf = 'wantToRead'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books
                    .filter(books => books.shelf === "read")
                    .map(book => (
                      <li key={book.id}>
                        <Book 
                            book = {book}
                            moveShelf={this.props.moveShelf}
                            currentShelf = 'read'
                        />
                      </li>
                    ))}
                </ol>
              </div>
            </div>
          </div> */}
          <Shelf
						shelfName='currentlyReading'
						innerText='Currently Reading'
						books={this.props.books}
						moveShelf={this.props.moveShelf}
					/>
					<Shelf
						shelfName='wantToRead'
						innerText='Want To Read'
						books={this.props.books}
						moveShelf={this.props.moveShelf}
					/>
					<Shelf
						shelfName='read'
						innerText='Read'
						books={this.props.books}
						moveShelf={this.props.moveShelf}
					/>
        </div>
        <div className="open-search">
          <Link 
             to="/search"
          >
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
