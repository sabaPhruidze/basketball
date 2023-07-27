import { useNavigate } from "react-router-dom";

import style from "./home.module.css";

import facebook from "../assets/icon/facebook.svg";
import instagram from "../assets/icon/instagram.svg";
import twitter from "../assets/icon/twitter.svg";

import mainVideoMobile from "../assets/video/mainVideomobile.mp4";
import mainVideoForWeb from "../assets/video/mainVideoForWeb (2).mp4";
import { useContext } from "react";
import { myContext } from "./Root";

export default function Home() {
  const context = useContext(myContext);
  const { screenWidth, languageChanger } = context;
  const ICONS_DATA = [
    {
      source: facebook,
      class: `${style.FITIcon} ${style.iconF}`,
      link: "https://www.facebook.com/",
    },
    {
      source: instagram,
      class: `${style.FITIcon} ${style.iconI}`,
      link: "https://www.instagram.com/",
    },
    {
      source: twitter,
      class: `${style.FITIcon} ${style.iconT}`,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2F",
    },
  ];
  const navigation = useNavigate();

  return (
    <>
      <div className={style.orangeCover}></div>
      <div className={style.mainVideoBackground}>
        <video
          loop
          muted
          autoPlay
          src={screenWidth <= 580 ? mainVideoMobile : mainVideoForWeb}
        />
      </div>
      {ICONS_DATA.map((data, idx) => {
        return (
          <a href={data.link} target="_blank" key={idx}>
            <img src={data.source} alt={data.source} className={data.class} />
          </a>
        );
      })}
      <div
        style={{
          margin:
            screenWidth < 850 ? "35px 0px 0px 50px" : "160px 0px 0px 75px",
        }}
      >
        <div
          className={style.homeText}
          style={{
            width: screenWidth <= 520 ? 250 : screenWidth <= 770 ? 400 : 650,
          }}
        >
          <h1>
            {languageChanger(
              "კეთილი იყოს თქვენი მობრძანება ჩვენს კალათბურთის ვებსაიტზე",
              "ようこそ、我々のバスケットボールのウェブサイトに。",
              "Welcome to our basketball website"
            )}
          </h1>
          <h2>
            {languageChanger(
              "თქვენი საბოლოო დანიშნულება ყველაფრისთვის, რაც დაკავშირებულია ამ სპორტთან",
              "このスポーツに関連するすべてを網羅した、あなたの究極の目的地です",
              "your ultimate destination for everything hoops-related!"
            )}
          </h2>
          <h3 style={{ width: screenWidth <= 580 ? 290 : 330 }}>
            {languageChanger(
              "თუ ხართ მოყვარული გულშემა- ტკივარი, მოთამაშე, რომელიც ცდილობს გაიუმჯობესოს თავისი უნარები, ან უბრალოდ გსურთ დატკბეთ თამაშის ყურებით, თქვენ სწორ ადგილას მოხვედით.",
              "熱心なファンでも、スキルを向上させたい選手でも、単純にゲームの興奮を楽しむ人でも、あなたは正しい場所に来ました。",
              " Whether you're a die-hard fan, a player looking to improve your　skills, or simply someone who enjoys the excitement of the game,　you've come to the right place."
            )}
          </h3>
        </div>
        <button
          className={`${style.btn} ${style.MainBTN}`}
          style={{ marginTop: 10 }}
          onClick={() => {
            navigation("/history");
          }}
        >
          {languageChanger("იხილეთ მეტი...", "もっと見る...", "See more ...")}
        </button>
      </div>
    </>
  );
}
