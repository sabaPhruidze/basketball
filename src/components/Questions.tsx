import React from "react";
import arrow from "../assets/icon/arrow.svg";
import styles from "./accordion.module.css";
import ChildAccordionCard from "./ChildAccordionCard";
import { useState } from "react";
import style from "./questions.module.css";

export default function Questions() {
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
      title: "Critical Thinking",
      content:
        "The ability to analyze and evaluate information, arguments, and claims in an objective and systematic way, while avoiding biases and fallacies.",
    },
    {
      number: 2,
      title: "Logic",
      content:
        " The study of the principles and methods used to distinguish good reasoning from bad reasoning, as well as the formal rules used to construct and evaluate arguments.",
    },
    {
      number: 3,
      title: "Problem-Solving",
      content:
        "The process of identifying, analyzing, and resolving problems or issues in a systematic and effective way, using logical and creative thinking skills.",
    },
    {
      number: 4,
      title: "Decision-Making",
      content:
        "The process of choosing between alternatives or options based on a set of criteria, using logic, reasoning, and critical thinking skills.",
    },
    {
      number: 5,
      title: "Fallacies",
      content:
        "Common errors in reasoning that can undermine the validity of an argument, such as ad hominem attacks, straw man arguments, false dichotomies, and appeals to emotion.",
    },
  ];
  return (
    <>
      <div className={style.background} />
      <div className={style.wrapper}>
        <div className={style.container}>
          {/* <img src={img} className={style.img} /> */}
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
