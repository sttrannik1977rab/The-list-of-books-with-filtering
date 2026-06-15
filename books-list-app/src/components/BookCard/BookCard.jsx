import './BookCard.css';

export const BookCard = ({title, author, year, isRead, cover, genre, onDelete, id}) => {

    const isReadTextContent = isRead === false ?  'Не прочитано' : 'Прочитано';
    const isReadClassname = isRead === false
        ? "book-card__status-data"
        : "book-card__status-data book-card__status-data--blue";

    const genreColor = genre === 'роман'
        ? 'blue'
        : genre === 'повесть'
            ? 'green'
            : genre === 'антиутопия'
                ? 'orange'
                : 'violet'

    const handleDeleteClick = () => {
        // Вызываем функцию, переданную из App, и передаём id пользователя
        if (typeof onDelete === 'function') {

            onDelete(id);

        } else {

            console.error('onDelete не является функцией!', onDelete);
        }
    }    

    return (

        <div className="book-card">
            <div className="book-card__title-wrap">
                <img className="book-card__img" src={cover} alt={title} width={120} height={120}/>
                <h2 className="book-card__title">{title}</h2>
            </div>
            <div className="book-card__content-wrap">
                <span className="book-card__author">Автор:    <span className="book-card__author-data">{author}</span></span>
                <span className="book-card__year">Год издания:    <span className="book-card__year-data">{year}</span></span>
                <span className="book-card__genre">Жанр:    <span className="book-card__genre-data" style={{color: genreColor}}>{genre}</span></span>
                <span className="book-card__status">Статус:     <span className={isReadClassname}>{isReadTextContent}</span></span>
            </div>
            {genre !== 'роман' && 
                <button 
                    className= "book-card__delete" 
                    type="button" 
                    onClick={handleDeleteClick}
                >
                    Удалить
                </button>
            }   
        </div>
 
    )
}
