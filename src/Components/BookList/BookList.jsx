import { useLocation } from "react-router-dom";


const BookList = () => {
    const Location = useLocation();
    const books = Location.state?.data;
    console.log(Location , books);

    return (
        <div>
            hello
        </div>
    );
};

export default BookList;