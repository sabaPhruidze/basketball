import { useContext } from "react";
import { myContext } from "./Root";
import style from "./history.module.css";
import Pag from "./support/Pag";
import GEOM from "../assets/img/GEOM.jpg"
import JPNM  from "../assets/img/JPNM.jpg"
import USAM from "../assets/img/USA4.jpg"


export default function History() {
  const context = useContext(myContext);
  const { screenWidth, languageChanger, state } = context;
  const { whichLanguage } = state;
  const data = [
    {
      img:GEOM,
      name:languageChanger('საქართველო','Georgia','ジョージア')
    },
    {
      img:JPNM,
      name:languageChanger('იაპონია','Japan','日本')
    },
    {
      img:USAM,
      name:languageChanger('ამერიკა','USA','アメリカ')
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
          
            <div className={style.dFlexColumn}>
            <img src={data.img} alt="img" className={style.dataImage}/>
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
