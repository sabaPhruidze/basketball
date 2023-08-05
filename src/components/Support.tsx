import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Root";
import Carousel from 'react-bootstrap/Carousel';
import style from "./support.module.css";
import BGFS from "../assets/img/BGFS.jpg";
import SC1 from "../assets/img/SC1.jpg"
import SC2 from "../assets/img/SC2.jpg"
import SC3 from "../assets/img/SC3.jpeg"
import SC4 from "../assets/img/SC4.jpeg"
import SC5 from "../assets/img/SC5.jpg"

export default function ContactForm() {
  const context = useContext(myContext);
  const {  languageChanger, screenWidth,dispatching } = context;
  const navigate = useNavigate();
  const nameRef = useRef<any>("");
  const emailRef = useRef<any>("");
  const textRef = useRef<any>("");

  const handleSubmit = async (e: any) => {
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
      console.log(response);
      nameRef.current.value = "";
      emailRef.current.value = "";
      textRef.current.value = "";
      dispatching("sendForSupport",true);
      navigate('/');

    } catch (error) {
      console.error("Error:", error);
      // Handle the error if needed
    }
  };
  
  const caruselData: {
    img: string;
    alt: string;
  }[] = [
    {
      img: SC1,
      alt: "first image",
    },
    {
      img: SC2,
      alt: "second image",
    },
    {
      img: SC3,
      alt: "third image",
    },
    {
      img: SC4,
      alt: "fourth image",
    },
    {
      img: SC5,
      alt: "fifth image",
    },
  ]

  return (
    <div>
      <img src={BGFS} alt="BGIMG" className={style.img} />
      <div className={style.BGColor} />
      <div className={style.dFlex} style={{padding:screenWidth < 1260 ? "0 30px 0 30px" : "0 30px 0 120px",justifyContent: screenWidth < 870 ? "center" : "space-between"}}>
        <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name"  className={screenWidth < 1250 ? style.labelSScale : style.labelBScale}>{languageChanger('სახელი','名前','Name')}</label>
            <input id="name" type="text" ref={nameRef} minLength={3} placeholder={languageChanger('გთხოვთ მიუთითოთ თქვენი სახელი',"あなたの名前を入力してください",'Please enter your name')} />
          </div>
          <div>
            <label htmlFor="email" className={screenWidth < 1250 ? style.labelSScale : style.labelBScale}>{languageChanger('ელ-ფოსტა','メール','Email')}</label>
            <input id="email" type="email" ref={emailRef} pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" placeholder={languageChanger('გთხოვთ მიუთითოთ თქვენი ელ-ფოსტა',"メールアドレスを入力してください",'Please enteryour e-mail address')} />
          </div>
          <div>
            <label htmlFor="text" className={screenWidth < 1250 ? style.labelSScale : style.labelBScale}>{languageChanger('შეტყობინება',"メッセージ","Message")}</label>
            <textarea id="text" minLength={10} ref={textRef} placeholder={languageChanger('გთხოვთ ჩაწეროთ თქვენი შეკითხვა',"質問を入力してください",'Please enter your question')} />
          </div>
          <button type="submit" className={style.btnS}>{languageChanger("გაგზავნა","送信する","Submit")}</button>
        </form>
        {screenWidth < 870 ? null :
          <Carousel className={screenWidth < 1170 ? style.caruselS  : style.caruselB}>
            {caruselData.map((data, index) => (
              <Carousel.Item key={index}>
                 <img src={data.img} alt={data.alt} className={screenWidth < 1170 ? style.caruselImgS : style.caruselImgB} />
              </Carousel.Item>
            ))}
          </Carousel>
          }
      </div>
    </div>
  );
}