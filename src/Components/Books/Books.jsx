import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="m-20">
            <h1 className="w-full text-center text-4xl font-bold mb-20">Books {books.length}</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    books.map(book => <Book key={books.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;