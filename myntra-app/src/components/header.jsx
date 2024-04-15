import { VscAccount } from "react-icons/vsc";
import { MdFavorite } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const bag = useSelector((store) => store.bag);
  return (
    <>
      <header className="head">
        <div className="logo_container">
          <Link to="/">
            <img
              className="myntra_home"
              src="https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png?f=webp"
            />
          </Link>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">search</span>
          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              <VscAccount />
            </span>
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <span className="material-symbols-outlined action_icon">
              <MdFavorite />
            </span>
            <span className="action_name">Wishlist</span>
          </div>

          <Link className="action_container" to="/bag">
            <span className="material-symbols-outlined action_icon">
              <FaShoppingBag />
            </span>
            <span className="action_name">Bag</span>
            <span className="bag-item-count bag">{bag.length}</span>
          </Link>
        </div>
      </header>
      ;
    </>
  );
}

export default Header;
