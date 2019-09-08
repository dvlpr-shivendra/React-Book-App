import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const { addBook } = useContext(BookContext);

    const handleSubmit = (e)  => {
        e.preventDefault();
        addBook(title, author);
        setTitle("");
        setAuthor("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button type="submit">Add Book</button>
        </form>
    );
}

export default BookForm;