import { BookCard } from '../BookCard/BookCard';

import './BookList.css';

export const BookList = ({ books, onDeleteBook }) => {

    if (!books || books.length === 0) {

        return (
            
            <p className="book-list__empty">📭 Книги не найдены. Попробуйте изменить фильтр.</p>
        )

    } else {

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
    }

    
};