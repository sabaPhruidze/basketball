import { useRef,useContext } from "react";
import axios from "axios";
import { myContext } from "./Root";
import style from "./support.module.css";
import EXIT from "../assets/icon/EXIT.svg"
import BGFS from "../assets/img/BGFS.jpg";


export default function ContactForm() {
  const context = useContext(myContext);
  const {dispatching,state,languageChanger} = context;
  // const {nameFS,emailFS,textFS,regexFS,sendFS} = state;

  const nameRef = useRef<any>("");
  const emailRef = useRef<any>("");
  const textRef = useRef<any>("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://coding-world.com/back/public/api/fake-contact/add",
        {
          name: nameRef.current.value,
          email: emailRef.current.value,
          text: textRef.current.value,
        }
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      textRef.current.value = "";

      console.log("Response:", response.data);
      // Do something with the response if needed
    } catch (error) {
      console.error("Error:", error);
      // Handle the error if needed
    }
  };

  return (
    <div>
    <img src={BGFS} alt="BGIMG" className={style.img} />
    <div className={style.BGColor} />
      <div className={style.dFlex}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>{languageChanger('სახელი','名前','Name')}</label>
            <input type="text" ref={nameRef} pattern=".{3,}" placeholder={languageChanger('გთხოვთ მიუთითოთ თქვენი სახელი',"あなたの名前を入力してください",'Please enter your name')}/>
          </div>
          <div>
            <label>{languageChanger('ელ-ფოსტა','メール','Email')}</label>
            <input type="email" ref={emailRef} pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" placeholder={languageChanger('გთხოვთ მიუთითოთ თქვენი ელ-ფოსტა',"メールアドレスを入力してください",'Please enter your e-mail address')}/>
          </div>
          <div>
            <label>{languageChanger('შეტყობინება',"メッセージ","Message")}</label>
            <textarea ref={textRef} placeholder={languageChanger('გთხოვთ ჩაწეროთ თქვენი შეკითხვა',"質問を入力してください",'Please enter your question')}/>
          </div>
          <button type="submit">{languageChanger('გაგზავნა',"送信する","Submit")}</button>
        </form>
      </div>
    </div>
  );
}