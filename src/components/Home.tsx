import { useNavigate } from "react-router-dom";
import {useLayoutEffect,useContext} from "react";
import { myContext } from "./Root";
import style from "./home.module.css";
import replayStyle from "./replay.module.css"
import FACEBOOK_I from "../assets/icon/facebook.svg";
import INSTAGRAM_I from "../assets/icon/instagram.svg";
import TWITTER_I from "../assets/icon/twitter.svg";

import mainVideoMobile from "../assets/video/mainVideomobile.mp4";
import mainVideoForWeb from "../assets/video/mainVideoForWeb (2).mp4";




export default function Home() {
  const context = useContext(myContext);
  const { screenWidth, languageChanger,state,dispatching,EXIT} = context;
  const {sendFS} = state;
  const ICONS_DATA = [
    {
      source: FACEBOOK_I,
      class: `${style.FITIcon} ${style.iconF}`,
      link: "https://www.facebook.com/",
    },
    {
      source: INSTAGRAM_I,
      class: `${style.FITIcon} ${style.iconI}`,
      link: "https://www.instagram.com/",
    },
    {
      source: TWITTER_I,
      class: `${style.FITIcon} ${style.iconT}`,
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2F",
    },
  ];
  const navigation = useNavigate();
  // useLayoutEffect(() => dispatching('CAN_NOT_LOGIN'),[]);
  return (
    <>
      <div className={replayStyle.orangeCover}></div>
      {sendFS ? (
        <div className={replayStyle.BGFR}>
          <div className={replayStyle.containerFR}>
            <img src={EXIT} alt="exit" className={replayStyle.exitIcon} onClick={() => dispatching("SEND_FOR_SUPPORT",false)}/>
            <p>{languageChanger("გილოცავთ! თქვენი შეტყობინება წარმატებით გაიგზავნა","おめでとう！ メッセージは正常に送信されました","congratulations! Your message has been successfully sent ")}</p>
          </div>
      </div>
      ) : null}
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
            screenWidth < 850 ? "0px 0px 150px 50px" : "0px 0px 50px 75px",
        }}
      >
        <div
          className={style.homeText}
          style={{
            width: screenWidth <= 520 ? 250 : screenWidth <= 770 ? 400 : 720,
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
          <h3 style={{ width: screenWidth <= 580 ? 290 : 380 }}>
            {languageChanger(
              "თუ ხართ მოყვარული გულშემა- ტკივარი, მოთამაშე, რომელიც ცდილობს გაიუმჯობესოს თავისი უნარები, ან უბრალოდ გსურთ დატკბეთ თამაშის ყურებით, თქვენ სწორ ადგილას მოხვედით.",
              "熱心なファンでも、スキルを向上させたい選手でも、単純にゲームの興奮を楽しむ人でも、あなたは正しい場所に来ました。",
              " Whether you're a die-hard fan, a player looking to improve your　skills, or simply someone who enjoys the excitement of the game,　you've come to the right place."
            )}
          </h3>
        </div>
        <button
          className={`${replayStyle.btn} ${style.homeButton}`}
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
