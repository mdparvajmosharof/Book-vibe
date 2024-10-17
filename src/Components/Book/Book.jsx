import { FaRegStar } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {bookId, bookName, image, tags, author, category, rating } = book;
  return (
    <div>
      <Link to={`/book/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-[300px]" src={image} alt="Books" />
          </figure>
          <div className="card-body">
            <div className="flex items-center gap-2">
              <span className="p-2 text-sm text-blue-600 bg-gray-50 rounded-full px-3">
                {tags[0]}
              </span>
              <span className="p-2 text-blue-600 bg-gray-50 rounded-full px-3">
                {tags[1]}
              </span>
            </div>
            <h2 className="card-title font-bold my-3">{bookName}</h2>
            <p>By : {author}</p>
            <div className="mt-5 flex justify-between items-center pt-5 border-t-2 border-dashed ">
              <div>{category}</div>
              <div className="flex items-center gap-1">
                <span>{rating}</span>
                <span>
                  <FaRegStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};
export default Book;
