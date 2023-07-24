import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../Root";
import style from "./support.module.css";
import copyright from "../../assets/icon/copyright.png";
export default function Footer() {
  const context = useContext(myContext);
  const { languageChanger } = context;
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : (
        <div className={style.footer}>
          <img src={copyright} alt="copyright" className={style.copyright} />
          <p>
            {languageChanger(
              "2023 მეტი პროექტი :",
              "2023 もっとプロジェクト:",
              "2023 More projects on my:"
            )}
          </p>
          <p className={style.footerButton}>
            <b>
              {languageChanger(
                " github ვებ-გვერდზე",
                "私のgithubウェブページで",
                "github page"
              )}
            </b>
          </p>
        </div>
      )}
    </>
  );
}
