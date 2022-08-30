import React, { useEffect, useState } from "react";
import "./home.scss";
import BgcHome from "../../images/home-background.png";
import ImgSlider from "./ImgSlider/ImgSlider";
import Viewer from "./Viewers/Viewer";
import Recomments from "./Recommends/Recomments";
import NewDisney from "./NewDisney/NewDisney";
import Originals from "./Originals/Originals";
import Trending from "./Trendings/Trending";
import { useDispatch, useSelector } from "react-redux";
import { app, database } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { setMovie } from "../../features/movie/movieSlice";
import { selectUserName } from "../../redux/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  const collectionData = collection(database, "movies");

  const [fire, setFire] = useState();

  useEffect(() => {
    onSnapshot(collectionData, (snapshot) => {
      snapshot.docs.map((doc) => {
        const data = doc.data().type;
        switch (data) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];

            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });
      dispatch(
        setMovie({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <div className="home">
      <ImgSlider />
      <Viewer />
      <Recomments />
      <NewDisney />
      <Trending />
      <Originals />
    </div>
  );
};

export default Home;
