import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Root";

import style from "./history.module.css";
import Pag from "./support/Pag";
import replayStyle from './replay.module.css';

import GEOM from "../assets/img/GEOM.jpg"
import JPNM  from "../assets/img/JPNM.jpg"
import USAM from "../assets/img/USA4.jpg"
import GEOMCH from "../assets/img/GEO1.jpg"

export default function History() {
  const navigation = useNavigate();
  const context = useContext(myContext);
  const { screenWidth, languageChanger} = context;
  const data = [
    {
      img:screenWidth <= 1250 ? GEOMCH : GEOM,
      name:languageChanger('საქართველო','ジョージア','Georgia')
    },
    {
      img:JPNM,
      name:languageChanger('იაპონია','日本','Japan')
    },
    {
      img:USAM,
      name:languageChanger('ამერიკა','アメリカ','USA')
    }
  ]
  return (
    <>
      <div className={`${replayStyle.orangeCover} ${style.orangeCover}`}></div>
      <div className={replayStyle.wrapper}>
        <div
          className={style.container}
          style={{
            margin: screenWidth <= 860 ? "10px auto" : "10px auto",
            width:screenWidth <= 860 ? "calc(100% - 20px)" : "calc(100% - 200px)",
          }}
        >
          <div className={replayStyle.dFlexRow}>
            {data.map((data,idx) => (
                <div className={`${replayStyle.dFlexColumn} ${replayStyle.AICenter}`} key={idx}>
                  <img src={data.img} alt="img" className={style.dataImage} onClick={() => {
                    data.img === GEOM ? navigation('/history/8') : data.img === USAM  ? navigation('/history/4') : data.img === JPNM ? navigation('/history/1') : ""
                  }}
                  style={{width:screenWidth <= 450 ? "80%" : "85%",height:screenWidth <= 450 ? "80%":"90%",objectPosition:screenWidth <=1250 ? "calc(100% - 30%)": "center"}}
                  />
                  <p className={style.dataName}>{data.name}</p>
                </div>
            )) }
         </div>
        </div>
        <Pag />
      </div>
    </>
  );
}
