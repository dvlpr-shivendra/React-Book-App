import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';


const BookList = () => {
    const { books } = useContext(BookContext);
    return books.length ?  (
        <div className="book-list">
            <table>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(book => {
                            return (<BookDetails book={book} key={book.id} />);
                        })
                    }
                </tbody>
            </table>
        </div>
    ) : (
        <div className="empty">No books to read.</div>
    )
}
 
export default BookList;
