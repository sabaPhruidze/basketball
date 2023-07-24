import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import style from "./support.module.css";
import { useContext } from "react";
import { myContext } from "../Root";
import navbarButton from "../../assets/icon/toggle.png";
import MainIcon from "../../assets/icon/home.svg";
import HistoryIcon from "../../assets/icon/history.svg";
import PracticalIcon from "../../assets/icon/practic.svg";
import QuestionsIcon from "../../assets/icon/questions.svg";
import SupportIcon from "../../assets/icon/support.svg";
import LoginIcon from "../../assets/icon/login.svg";
import RegisterIcon from "../../assets/icon/register.svg";
import exit from "../../assets/icon/exit.svg";
import saqartvelo from "../../assets/img/georgia.png";
import japan from "../../assets/img/japan.png";
import UK from "../../assets/img/united-kingdom.png";
export default function Header() {
  const context = useContext(myContext);
  const { state, dispatching, screenWidth, languageChanger } =
    context;
  const { navBarToggle, languageToggle } = state;
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
      content: languageChanger("შესვლა", "ログイン", "Login"),
      to: "/login",
    },
    {
      content: languageChanger(
        "შექმენი ანგარიში",
        "アカウントを作成",
        "create accaunt"
      ),
      to: "/register",
    },
  ];
  const COMMON_LIST = [
    {
      content: languageChanger("მთავარი", "メイン", "Main"),
      to: "/",
      icon: MainIcon,
    },
    {
      content: languageChanger("ისტორია", "履歴", "History"),
      to: "/history",
      icon: HistoryIcon,
    },
    {
      content: languageChanger("ვარჯიში", "練習", "Practice"),
      to: "/practic",
      icon: PracticalIcon,
    },
    {
      content: languageChanger("შეკითხვები", "質問", "Questions"),
      to: "/questions",
      icon: QuestionsIcon,
    },
    {
      content: languageChanger("დახმარება", "支援", "Support"),
      to: "/support",
      icon: SupportIcon,
    },
    {
      content: languageChanger("შესვლა", "ログイン", "Login"),
      to: "/login",
      icon: LoginIcon,
    },
    {
      content: languageChanger(
        "რეგისტრაცია",
        "登録", //とうろく
        "Register"
      ),
      to: "/register",
      icon: RegisterIcon,
    },
  ];
  return (
    <>
      <header>
        {screenWidth < 860 ? (
          navBarToggle ? (
            <div className={style.navbardiv}>
              <div>
                <img
                  src={exit}
                  alt="exit"
                  className={style.navbardivExit}
                  onClick={() => {
                    dispatching("hideNavBar", false);
                  }}
                />
                <img
                  src={
                    languageToggle === 0
                      ? saqartvelo
                      : languageToggle === 1
                      ? japan
                      : languageToggle === 2
                      ? UK
                      : ""
                  }
                  alt="language"
                  className={style.languageChanger}
                  onClick={() => {
                    languageToggle === 0
                      ? dispatching("japanese", 1)
                      : languageToggle === 1
                      ? dispatching("UK", 2)
                      : dispatching("georgian", 0);
                  }}
                />
              </div>
              <nav>
                <ul>
                  {COMMON_LIST.map((data, key) => {
                    return (
                      <div key={key} className={style.navbardivContainer}>
                        <Link
                          to={data.to}
                          className={style.headerLink}
                          style={{ marginLeft: "0px" }}
                        >
                          <img
                            src={data.icon}
                            alt={data.icon}
                            className={style.navbardivIcon}
                          />
                        </Link>
                        <li>
                          <Link to={data.to} className={style.headerLink}>
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
                src={navbarButton}
                alt="navbarButton"
                className={style.navbarButton}
                style={{
                  filter:
                    screenWidth <= 690 &&
                    (location.pathname === "/history" ||
                      pagenumber.some((page) =>
                        location.pathname.endsWith(`/history/${page}`)
                      ))
                      ? "invert(62%) sepia(46%) saturate(1989%) hue-rotate(1deg) brightness(105%) contrast(105%)"
                      : undefined,
                  top:
                    screenWidth <= 690 &&
                    (location.pathname === "/history" ||
                      pagenumber.some((page) =>
                        location.pathname.endsWith(`/history/${page}`)
                      ))
                      ? 70
                      : 50,
                  right:
                    screenWidth <= 690 &&
                    (location.pathname === "/history" ||
                      pagenumber.some((page) =>
                        location.pathname.endsWith(`/history/${page}`)
                      ))
                      ? 40
                      : 30,
                }}
                onClick={() => {
                  dispatching("showNavBar", true);
                }}
              />
            </>
          )
        ) : location.pathname === "/" ? (
          <nav className={style.headerDFlex}>
            <img
              src={
                languageToggle === 0
                  ? saqartvelo
                  : languageToggle === 1
                  ? japan
                  : languageToggle === 2
                  ? UK
                  : ""
              }
              alt="language"
              className={style.language}
              onClick={() => {
                languageToggle === 0
                  ? dispatching("japanese", 1)
                  : languageToggle === 1
                  ? dispatching("UK", 2)
                  : dispatching("georgian", 0);
              }}
            />
            <ul className={style.headerUL}>
              {LEFT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.headerLink}>
                      {data.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={style.headerUL}>
              {RIGHT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.headerLink}>
                      {data.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : (
          <nav className={`${style.headerDFlexBackground}`}>
            <img
              src={
                languageToggle === 0
                  ? saqartvelo
                  : languageToggle === 1
                  ? japan
                  : languageToggle === 2
                  ? UK
                  : ""
              }
              alt="language"
              className={style.language}
              onClick={() => {
                languageToggle === 0
                  ? dispatching("japanese", 1)
                  : languageToggle === 1
                  ? dispatching("UK", 2)
                  : dispatching("georgian", 0);
              }}
            />
            <ul className={style.headerUL}>
              {LEFT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.headerLink}>
                      {data.content}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className={style.headerUL}>
              {RIGHT_LIST.map((data, key) => {
                return (
                  <li key={key}>
                    <Link to={data.to} className={style.headerLink}>
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
