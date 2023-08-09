import { Link, useLocation } from "react-router-dom";
import style from "./support.module.css";
import { useContext } from "react";
import { myContext } from "../Root";
import TOGGLE_ICON from "../../assets/icon/toggle.png";
import HOME_ICON from "../../assets/icon/home.svg";
import HISTORY_ICON from "../../assets/icon/history.svg";
import PRACTICAL_ICON from "../../assets/icon/practic.svg";
import QUESTION_ICON from "../../assets/icon/questions.svg";
import SUPPORT_ICON from "../../assets/icon/support.svg";
import LOGIN_ICON from "../../assets/icon/login.svg";
import REGISTRATION_ICON from "../../assets/icon/register.svg";
import GEO_ICON from "../../assets/img/GEO.png";
import JPN_ICON from "../../assets/img/JPN.png";
import UK_ICON from "../../assets/img/UK.png";

export default function Header() {
  const context = useContext(myContext);
  const { state, dispatching, screenWidth, languageChanger,EXIT } =
    context;
  const { navCollapsE, languagE,login,loginLS} = state;
  const {nickname} = login;
  const location = useLocation();
  const pagenumber = [1, 2, 3, 4, 5, 6, 7, 8];
  const LEFT_LIST = [
    {
      content: languageChanger("მთავარი", "メイン", "Main"),
      to: "/",
    },
    {
      content: languageChanger("ისტორია", "履歴", "History"), //rireki
      to: "/history",
    },
    {
      content: languageChanger("ვარჯიში", "練習", "Practice"),
      to: "/practic",
    },
    {
      content: languageChanger("შეკითხვები", "良くある質問", "Questions"), //ioquarushitcumon
      to: "/questions",
    },
    {
      content: languageChanger("დახმარება", "支援", "Support"),
      to: "/support",
    },
  ];
  const RIGHT_LIST = [
    {
      content: loginLS ==="LOGIN" ? nickname : languageChanger("შესვლა", "ログイン", "Login"),
      to:"/login",
    },
    {
      content: loginLS ==="LOGIN" ? languageChanger("გამოსვლა", "ログアウト", "Logout") :  languageChanger(
        "რეგისტრაცია",
        "登録", //とうろく
        "Register"
      ),
      to:loginLS ==="LOGIN" ? "/login" : "/register",
      logic:() => {dispatching('BEFORE_TRYING_LOGIN')},
    },
  ];
  const COMMON_LIST = [
    {
      content: languageChanger("მთავარი", "メイン", "Main"),
      to: "/",
      icon: HOME_ICON,
    },
    {
      content: languageChanger("ისტორია", "履歴", "History"),
      to: "/history",
      icon: HISTORY_ICON,
    },
    {
      content: languageChanger("ვარჯიში", "練習", "Practice"),
      to: "/practic",
      icon: PRACTICAL_ICON,
    },
    {
      content: languageChanger("შეკითხვები", "質問", "Questions"),
      to: "/questions",
      icon: QUESTION_ICON,
    },
    {
      content: languageChanger("დახმარება", "支援", "Support"),
      to: "/support",
      icon: SUPPORT_ICON,
    },
    {
      content:loginLS ==="LOGIN" ? nickname : languageChanger("შესვლა", "ログイン", "Login"),
      to:"/login",
      icon: LOGIN_ICON,
    },
    {
      content: loginLS ==="LOGIN" ? languageChanger("გამოსვლა", "ログアウト", "Logout") :  languageChanger(
        "რეგისტრაცია",
        "登録", //とうろく
        "Register"
      ),
      to:loginLS ==="LOGIN" ? "/login" : "/register",
      icon: REGISTRATION_ICON,
      logic:() => {dispatching('BEFORE_TRYING_LOGIN')},
    },
  ];
console.log(loginLS);
  return (
    <>
      <header style={{height: 80}}>
        {screenWidth < 860 ? (
          navCollapsE ? (
            <div className={style.navBackground}>
              <div className={style.dFlexJCSB}>
                <img
                  src={EXIT}
                  alt="EXITICON"
                  className={`${style.exitI} ${style.filterW}`}
                  onClick={() => {
                    dispatching("N_HIDE", false);
                  }}
                />
                <img
                  src={
                    languagE === 0
                      ? GEO_ICON
                      : languagE === 1
                      ? JPN_ICON
                      : languagE === 2
                      ? UK_ICON
                      : ""
                  }
                  alt="language"
                  className={style.languageI}
                  onClick={() => {
                    languagE === 0
                      ? dispatching("JPN", 1)
                      : languagE === 1
                      ? dispatching("UK", 2)
                      : dispatching("GEO", 0);
                  }}
                />
              </div>
              <nav className={style.mt20}>
                <ul>
                  {COMMON_LIST.map((data, key) => {
                    return (
                      <div key={key} className={style.dFlexJCSB} >
                        <Link
                          to={data.to}
                          onClick={loginLS ==="LOGIN" && data.content === languageChanger("გამოსვლა", "ログアウト", "Logout") ? data.logic : () => {''}}
                        >
                          <img
                            src={data.icon}
                            alt={data.icon}
                            className={`${style.menuIcon} ${style.filterW}`}
                          />
                        </Link>
                        <li>
                          <Link to={data.to} className={style.menuContent} onClick={loginLS ==="LOGIN" && data.content === languageChanger("გამოსვლა", "ログアウト", "Logout") ? data.logic : () => {''}}>
                            {data.content}
                          </Link>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </nav>
            </div>
          ) : (
            <>
              <img
                src={TOGGLE_ICON}
                alt="TOGGLE_ICON"
                className={style.toggle}
                //style
                onClick={() => {
                  dispatching("N_SHOW", true);
                }}
              />
            </>
          )
        ) : (
          <nav className={location.pathname === "/" ? style.navNBK : style.navWBK}>
            <img
              src={
                languagE === 0
                  ? GEO_ICON
                  : languagE === 1
                  ? JPN_ICON
                  : languagE === 2
                  ? UK_ICON
                  : ""
              }
              alt="language"
              className={style.language}
              onClick={() => {
                languagE === 0
                  ? dispatching("JPN", 1)
                  : languagE === 1
                  ? dispatching("UK", 2)
                  : dispatching("GEO", 0);
              }}
            />
            <ul className={screenWidth < 930 ? `${style.ml50} ${style.navUL}` : style.navUL} >
              {LEFT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.menuContent}>
                      {data.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={style.navUL}>
              {RIGHT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.menuContent} onClick={loginLS ==="LOGIN" && data.content === languageChanger("გამოსვლა", "ログアウト", "Logout") ? data.logic : () => {''}}>
                      {data.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}