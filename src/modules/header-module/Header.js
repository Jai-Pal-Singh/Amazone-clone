import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import FlagIcon from "@material-ui/icons/Flag";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../../util/StateProvider";
import { auth } from "../../util/firebase";

function Header() {
  const [state, dispatch] = useStateValue();
  var handleAuthentication = () => {
    if (state.user) {
      auth.signOut();
      dispatch({
        type: "SET_USER",
        user: null,
      });
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__image"
          src="https://pngshare.com/wp-content/uploads/2021/06/Amazon-Logo-No-Background-5.png"
          alt="amazon logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <FlagIcon className="header__optionFlag" />
        </div>

        <Link to={!state.user && "/login"}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello, {state.user ? state.user?.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {state.user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {state.basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
