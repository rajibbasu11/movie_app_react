import { Link } from "react-router-dom";

function Header () {
    return (
        <div className='flex justify-between p-5 bg-amber-500 text-amber-100'>
            <div className="brand_name text-3xl cursor-pointer">
                <Link to={'/'}>Movie App</Link>
            </div>
            <div className="nav_link text-xl cursor-pointer">
                <Link to={'/'} className="mr-5">Home</Link>
                <Link to={'/favorites'} className="">Favorites</Link>
            </div>
      </div>
    )
}

export default Header;