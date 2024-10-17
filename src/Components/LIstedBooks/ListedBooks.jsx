import { useEffect, useState } from "react";
import { getStoredBook } from "../../Utility/localstorage";
import { Link, Outlet, useLoaderData } from "react-router-dom";

const ListedBooks = () => {
  const books = useLoaderData();
  console.log(books);
  const [storedBooks, setStoredBooks] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const storedBookIds = getStoredBook();
    if (books.length > 0) {
      // const bookStored = books.filter(book => storedBookIds.includes(book.id))
      const bookStored = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId == id);
        console.log(book);
        if (book) {
          bookStored.push(book);
        }
      }
      setStoredBooks(bookStored);
    }
  }, []);
  console.log(storedBooks);
  return (
    <div className="m-20">
      <div className="flex justify-center items-center py-10 w-full bg-gray-200 rounded-xl ">
        <h1 className="text-2xl font-bold ">Book {storedBooks.length}</h1>
      </div>
      <div className="flex justify-center my-10">
        <details className="dropdown ">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Rating </a>
            </li>
            <li>
              <a>Number of Pages</a>
            </li>
            <li>
              <a href="">Published Year</a>
            </li>
          </ul>
        </details>
      </div>
      {/* book */}
      <div>
        <div role="tablist" className="tabs tabs-lifted justify-start">
          <Link to={{ pathname: 'book', state: { data:storedBooks } }} onClick={()=> setTabIndex(0)} role="tab" className={`tab ${tabIndex === 0 ? 'tab tab-active' : 'tab'}`}>
            Read Books
          </Link>
          <Link to={`wishlist`} onClick={()=> setTabIndex(1)} role="tab" className={`tab ${tabIndex === 1 ? 'tab tab-active' : 'tab'}`}>
            Wishlsit Books
          </Link>
          
        </div>
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default ListedBooks;
