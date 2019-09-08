import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext);
    return ( 
        <tr className="table-row">
            <th className="title">{book.title}</th>
            <th className="author">{book.author}</th>
            <th className="delete-btn" onClick={() => removeBook(book.id)}>Delete</th>  
        </tr>
     );
}
 
export default BookDetails;