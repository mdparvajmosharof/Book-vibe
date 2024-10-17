import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" w-full h-screen flex flex-col justify-center items-center">
            <h1>Opps!!!</h1>
            <Link to="/"><button className="btn">GO Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;