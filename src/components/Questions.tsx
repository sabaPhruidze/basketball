import { useContext } from "react";
import { myContext } from "./Root";
import arrow from "../assets/icon/arrow.svg";
import ChildAccordionCard from "./ChildAccordionCard";
import { useState } from "react";
import style from "./questions.module.css";
import QLB from "../assets/img/QLB.jpg";
import QLS from "../assets/img/QLS.jfif";
export default function Questions() {
  const context = useContext(myContext);
  const {screenWidth,languageChanger}= context;
  const [arrowClick, setArrowClick] = useState<number | null>(null);
  function showHideNumberChange(number: number | null) {
    if (arrowClick === number) {
      setArrowClick(null);
    } else {
      setArrowClick(number);
    }
  }
  const DATA: {
    number: number;
    title: string;
    content: string;
  }[] = [
    {
      number: 1,
      title: languageChanger("რამდენი მოთამაშეა კალათბურთის გუნდში?","バスケットボールチームには何人の選手がいますか?",'How many players are on a basketball team?'),
      content:
        5,
    },
    {
      number: 2,
      title: languageChanger("რა არის კალათბურთის მიზანი?","バスケットボールの目的は何ですか？","What is the objective of basketball?"),
      content:
        languageChanger("მოწინააღმდეგე გუნდზე მეტი ქულის მოპოვება მოწინააღმდეგის კალათში ბურთის გადაგდებით.","相手のバスケットにボールをシュートして、相手チームより多くの得点を獲得すること。","To score more points than the opposing team by shooting the ball into the opponent's basket."),
    },
    {
      number: 3,
      title: languageChanger("რამდენ ხანს გრძელდება კალათბურთის თამაში?","バスケットボールの試合はどれくらい続きますか?","How long does a basketball game last?"),
      content:
      languageChanger("ოთხი მეოთხედი, თითოეული 12 წუთი გრძელდება პროფესიულ თამაშში და 8 წუთი კოლეჯში და საშუალო სკოლაში.","「4クォーターで、プロの試合ではそれぞれ12分間、大学や高校の試合では8分間続きます。」", "Four quarters, each lasting 12 minutes in professional play and 8 minutes in college and high school play."),
      
    },
    {
      number: 4,
      title: languageChanger("ვინ არის NBA-ს ისტორიაში ყველა დროის საუკეთესო ბომბარდირი?","NBA史上の歴代得点王は誰?","Who is the all-time leading scorer in NBA history?"),
      content:
        languageChanger("კარიმ აბდულ-ჯაბარი","カリーム・アブドゥル・ジャバー","Kareem Abdul-Jabbar"),
    },
    {
      number: 5,
      title: languageChanger("რა არის კალათბურთის ფარის მაქსიმალური სიმაღლე ?","最も高いバスケットボールのフープの高さはどれくらいですか?","What is the tallest basketball hoop height?"),
      content:
      languageChanger("10 ფუტი","10フィート","10 feet"),
    },
    {
      number: 6,
      title: languageChanger("რა სიგრძისაა კალათბურთის მოედანი?","バスケットボールコートの広さはどれくらいですか？","How wide is the basketball court?"),
      content:
      languageChanger("50 ფუტი","50フィート","50 feet"),
    },
    {
      number: 7,
      title: languageChanger("რა არის დასაშვები შეცდომების მაქსიმალური რაოდენობა?","許容されるエラーの最大数はどれくらいですか?","What is the maximum number of errors allowed?"),
      content:
      languageChanger("5_ზე მეტი","5つ以上","more than 5"),
    },
  ];
  return (
    <>
      <div className={style.background} />
      <div className={style.wrapper}>
        <div className={style.container} style={{marginTop: screenWidth < 860 ? 40 : 0}}>
          <img src={screenWidth < 1200 ? QLB : QLS } className={style.img} style={{objectPosition:innerWidth < 600 ? "calc(100% - 80%)" : innerWidth <1200 ? "calc(100% - 85%)" : "center"}}/>
          <div className={style.questionsContainer}>
            {DATA.map((item) => (
              <ChildAccordionCard
                arrowClick={arrowClick}
                showHideNumberChange={showHideNumberChange}
                arrow={arrow}
                number={item.number}
                title={item.title}
                content={item.content}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
