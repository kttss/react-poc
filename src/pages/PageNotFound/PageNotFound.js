import { Link } from "react-router-dom";

const  PageNotFound = () => (
        <div>
            <div>404 - Page Not Found</div>
            <Link to='/'>go home </Link>
        </div>
);

export default PageNotFound;