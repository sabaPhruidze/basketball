import react from "react";
import {useContext,useEffect,useRef} from "react";
import { myContext } from "./Root";
import style from "./support.module.css";
import EXIT from "../assets/icon/EXIT.svg"
import BGFS from "../assets/img/BGFS.jpg";
import axios from "axios";
export default function Support() {

  const context = useContext(myContext);
  const {dispatching,state} = context;
  const {nameFS,emailFS,textFS,regexFS,sendFS} = state;
  
  const axiosInstance = axios.create({ 
    baseURL: 'https://coding-world.com/back/public/api/fake-contact',
    timeout: 1000,
  });


  
    const sendContact =async () => {
      const response = await axiosInstance.post("/add", { 
        name: "saba",
        email:"beeefa@gmail.com",
        text:"1423324",
      })
     }

 
    const SEND_OR_NOT_DATA = [{data1:"Congratulations your message sent succesfully",data2:"!!! remember you must write at least 3 letters in name input, 12 letters in email input and seven letters in message"}]
  return (
    <div>
      <img src={BGFS} alt="BGIMG" className={style.img} />
      <div className={style.BGColor} />
      {SEND_OR_NOT_DATA.map((data,idx) => (
         regexFS === 1 ? <div className={style.sendedOrNot} key={idx}> <img src={EXIT} alt="EXIT" className={style.EXIT}  onClick={() => dispatching("regexForSupport",null)}/> {data.data1}</div> : regexFS === 2 ? <div className={style.sendedOrNot} key={idx + 1}> <img src={EXIT} alt="EXIT" className={style.EXIT} onClick={() => dispatching("regexForSupport",null)}/>{data.data2}</div> : ''
      ))}
      <div className={style.form}>
        <input type="text" placeholder="სახელი"/>
        <input type="email" placeholder="ემაილი"/>
        <textarea></textarea>
        <button onClick={() => sendContact()}>გაგზავნა</button>
      </div>
    </div>
  );
}










 
    // sendRef = useRef(
    //   {
    //     name: nameFS,
    //     email: emailFS,
    //     text: textFS,
    //   }
    // );
  
    // useEffect(() => {
    //   const createUser = async () => {
    //     const response = await axios.post(
    //       "https://coding-world.com/back/public/api/fake-contact/add",
          
    //     );
    //   };
    //   console.log("sf");
    //   createUser(); // the function must be summond after writing eat
    // }, []);
  