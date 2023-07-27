import { useContext } from "react";
import { myContext } from "./Root";
import style from "./history.module.css";
import Pag from "./support/Pag";
import HUSA1 from "../assets/img/USA1.jpg";
import HUSA2 from "../assets/img/USA2.jpg";
import HUSA3 from "../assets/img/USA3.jpg";

export default function History() {
  const context = useContext(myContext);
  const { screenWidth, languageChanger, state } = context;
  const { whichLanguage } = state;
  // variables for text
  
  // variables for text
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
         
        fef
        </div>
        <Pag />
      </div>
    </>
  );
}
