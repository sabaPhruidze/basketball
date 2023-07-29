import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "./Root";
import style from "./history.module.css";
import Pag from "./support/Pag";
import GEOM from "../assets/img/GEOM.jpg"
import JPNM  from "../assets/img/JPNM.jpg"
import USAM from "../assets/img/USA4.jpg"


export default function History() {
  const navigation = useNavigate();
  const context = useContext(myContext);
  const { screenWidth, languageChanger, state } = context;
  const { whichLanguage } = state;
  const data = [
    {
      img:GEOM,
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
      <div className={style.background}></div>
      <div className={style.wrapper}>
        <div
          className={style.container}
          style={{
            margin: screenWidth <= 860 ? "50px auto" : "0px auto",
            width:
              screenWidth <= 690 ? "calc(100% - 30px)" : "calc(100% - 200px)",
          }}
        >
          <div className={style.dFlexRow}>
            {data.map((data) => (
                <div className={style.dFlexColumn} key={data.name}>
                  <img src={data.img} alt="img" className={style.dataImage} onClick={() => {
                    data.img === GEOM ? navigation('/history/8') : data.img === USAM  ? navigation('/history/4') : data.img === JPNM ? navigation('/history/1') : ""
                  }}
                  style={{width:screenWidth <= 450 ? "80%" : "85%",height:screenWidth <= 450 ? "80%":"90%",objectPosition:screenWidth <=1200 ? "calc(100% - 30%)": "center"}}
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
