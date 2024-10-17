import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "../../Utility/localstorage";


const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);
  console.log(book, id);
  const{ review, bookName, image, tags, author, category, rating, yearOfPublishing, publisher,totalPages}= book;

const handleRead = () =>{
  saveBook(idInt);
  toast("Added to Read");
} 
const handleWishlist=()=> toast("Added to Wishlist");

  return (
    <div className="m-20">
      <div className=" card lg:card-side bg-base-100 shadow-xl w-full">
        <figure className="w-1/2">
          <img
          className="h-[600px]"
            src={image}
            alt="Album"
          />
        </figure>
        <div className="card-body w-1/2">
          <h2 className="card-title">{bookName}</h2>
          <div className="py-5">By : {author}</div>
          <div className=" border-y-2 py-5">{category}</div>
          <div><span>Review : </span>
          {review}</div>
          <div className="py-5 space-x-3"><span>Tag</span>
          <span className="p-2 text-sm text-blue-600 bg-gray-50 rounded-full px-3">
                {tags[0]}
              </span>
              <span className="p-2 text-blue-600 bg-gray-50 rounded-full px-3">
                {tags[1]}
              </span>
          </div>
          <table>
            <tbody>
                <tr>
                    <td>Nunber of Pages: </td>
                    <td>{totalPages}</td>
                </tr>
                <tr>
                    <td>Publisher:</td>
                    <td>{publisher}</td>
                </tr>
                <tr>
                    <td>Year of Publishing:</td>
                    <td>{yearOfPublishing}</td>
                </tr>
                <tr>
                    <td>Rating:</td>
                    <td>{rating}</td>
                </tr>
            </tbody>
          </table>
          <div className=" py-5 flex gap-10">
            <button onClick={handleRead} className="btn btn-outline ">Read</button>
            <button onClick={handleWishlist} className="btn btn-primary">Wishlist</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BookDetails;
