import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./detail.scss";
import PlayBtnBlack from "../../images/play-icon-black.png";
import PlayBtnWhite from "../../images/play-icon-white.png";
import groupChat from "../../images/group-icon.png";
import { app, database } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    const Data = async () => {
      const docData = doc(database, "movies", id);
      const docSnap = await getDoc(docData);

      if (docSnap.exists()) {
        setDetail(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    Data();
  }, [id]);

  return (
    <div className="detail">
      <div className="detail__bgc">
        <img src={detail.backgroundImg} alt={detail.title} />
      </div>
      <div className="detail__imgTitle">
        <img src={detail.titleImg} alt="" />
      </div>
      <div className="detail__contentMeta">
        <div className="detail__contentMeta-control">
          <button className="detail__player">
            <img src={PlayBtnBlack} alt="" />
            <span>Play</span>
          </button>
          <button className="detail__trailer">
            <img src={PlayBtnWhite} alt="" />
            <span>Trailer</span>
          </button>
          <div className="detail__addList">
            <span />
            <span />
          </div>
          <div className="detail__group">
            <img src={groupChat} alt="" />
          </div>
        </div>
        <div className="detail__subTitle">{detail.subTitle}</div>
        <div className="detail__decs">{detail.description}</div>
      </div>
    </div>
  );
};

export default Detail;
