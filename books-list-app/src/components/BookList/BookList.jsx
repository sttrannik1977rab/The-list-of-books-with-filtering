import { BookCard } from '../BookCard/BookCard';

import './BookList.css';

export const BookList = ({ books, onDeleteBook }) => {

    return (

        <ul className="book-list">
            {books.map((book) => (

                <li className="book-list__item" key={book.id}>
                    <BookCard
                        id={book.id} 
                        title={book.title}
                        author={book.author}
                        year={book.year}
                        isRead={book.isRead}
                        cover={book.cover}
                        genre={book.genre} 
                        onDelete={onDeleteBook}   
                    />
                </li>
            ))}
        </ul>
    )
};