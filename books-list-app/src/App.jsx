import { useState } from 'react';
import { BookList } from './components/BookList/BookList';
import { books as initialBooks } from './data/books.js';

import './App.css'

export default function App() {

    // Создаем состояние для списка книг
    const [booksList, setBooksList] = useState(initialBooks)
    // Создаем состояние. Начальное значение - "all" (показываем всех)
    const [activeFilter, setActiveFilter] = useState('all');
    // Создаем переменную для отфильтрованных карточек
    let filteredBooks = [];

    if (activeFilter === 'all') {

        filteredBooks = booksList; // показываем всех

    } else if (activeFilter === 'read') {
        // Оставляем только те, которые прочитаны: isRead === true
        filteredBooks = booksList.filter(book => book.isRead === true);

    }   else if (activeFilter === 'no-read') {
        // Оставляем только те, которые непрочитаны: isRead === false
        filteredBooks = booksList.filter(book => book.isRead === false);
    }

    const handleFilterClick = (filterName) => {

        setActiveFilter(filterName); // обновляем состояние
    }

    const handleDeleteBook = (bookId) => {
        // Создаем новый массив, в котором нет карточки книги с таким bookId
        const updateBooks = booksList.filter(book => book.id !== bookId);
        setBooksList(updateBooks); // обновляем состояние
    }

    // СЧЕТЧИКИ
    //  Общее количество книг
    const totalBooksCount = booksList.length;
    //  Количество прочитанных книг
    const readBooksCount = booksList.filter(book => book.isRead === true).length;

    return (

        <div className='app'>
            <div className="app__container">
                <h1 className="app__title">Список книг</h1>
                <div className="app__wrapper">
                    <aside className="app__options">
                        <div className="app__counters">
                            <p className="app__counter">📚 Всего книг: {totalBooksCount}</p>
                            <p className="app__counter">✅ Прочитано: {readBooksCount}</p>
                        </div>                    
                        <div className="app__buttons">
                            <button 
                                className={`app__btn ${activeFilter === 'all' ? 'app__btn--active' : ''}`}
                                type="button"
                                onClick={() => handleFilterClick('all')}
                            >
                                Все
                            </button>
                            <button 
                                className={`app__btn ${activeFilter === 'read' ? 'app__btn--active' : ''}`} 
                                type="button"
                                onClick={() => handleFilterClick('read')}
                            >
                                Прочитанные
                            </button>
                            <button 
                                className={`app__btn ${activeFilter === 'no-read' ? 'app__btn--active' : ''}`} 
                                type="button"
                                onClick={() => handleFilterClick('no-read')}
                            >
                                Непрочитанные
                            </button>
                        </div>                    
                    </aside>
                    <div className="app__data">
                        <BookList books={filteredBooks} onDeleteBook={handleDeleteBook}/>
                    </div>
                </div>
                
            </div>   
        </div>
        
    );
}