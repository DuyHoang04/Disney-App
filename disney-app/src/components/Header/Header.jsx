import React, { useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import HeaderLogo from "../../images/logo.svg";
import Home from "../../images/home-icon.svg";
import Search from "../../images/search-icon.svg";
import Watch from "../../images/watchlist-icon.svg";
import Original from "../../images/original-icon.svg";
import Series from "../../images/series-icon.svg";
import { Avatar } from "@mui/material";
import {
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../../redux/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userPhoto = useSelector(selectUserPhoto);

  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //tự đăng nhập lại
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  const handleGoogle = () => {
    if (!userName) {
      const provider = new GoogleAuthProvider(); //đăng nhập
      signInWithPopup(auth, provider)
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => console.log(err));
    } else if (userName) {
      signOut(auth).then((res) => {
        dispatch(setSignOut(), navigate("/")); // signOut
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLogin({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className="header">
      <div className="header__logo">
        <Link to={userName && "/home"}>
          <img src={HeaderLogo} alt="" />
        </Link>
      </div>

      {!userName ? (
        <button onClick={handleGoogle} className="header__login">
          Login
        </button>
      ) : (
        <>
          <div className="header__menu">
            <a href="/home">
              <img src={Home} alt="HOME" />
              <span>HOME</span>
            </a>
            <a>
              <img src={Search} alt="SEARCH" />
              <span>SEARCH</span>
            </a>
            <a>
              <img src={Watch} alt="WATCH" />
              <span>WATCH</span>
            </a>
            <a>
              <img src={Original} alt="ORIGINAL" />
              <span>ORIGINAL</span>
            </a>
            <a>
              <img src={Series} alt="SERIES" />
              <span>SERIES</span>
            </a>
          </div>
          <div className="header__avatar">
            <Avatar className="header__avatar-user" src={userPhoto} />
            <button onClick={handleGoogle} className="btn-signUp">
              Sign Out
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
