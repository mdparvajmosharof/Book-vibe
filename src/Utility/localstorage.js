const getStoredBook = () =>{
    const storedBook = localStorage.getItem("Book");
    if(storedBook){
        return JSON.parse(storedBook);

    }
    return [];
}

const saveBook = id=> {
    const storedBooks =getStoredBook();
    const exists = storedBooks.find(bookID => bookID === id);
    if(!exists){
        storedBooks.push(id);
        localStorage.setItem('Book', JSON.stringify(storedBooks))
    }
}
export {getStoredBook,saveBook}