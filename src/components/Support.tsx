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
  const {nameFS,emailFS,textFS,regexFS} = state;
  let sendRef = useRef<any>({})
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

    function regexCheck () {
      if (nameFS.length >= 3 && emailFS.length > 12 && textFS.length > 7) {
        dispatching("regexForSupport",1);
        console.log(regexFS)
      } else {
        dispatching("regexForSupport",2);
        console.log(regexFS)
      }
    }
    const SEND_OR_NOT_DATA = [{data1:"Congratulations your message sent succesfully",
    data2:"!!! remember you must write at least 3 letters in name input, 12 letters in email input and seven letters in message"}]
  return (
    <div>
      <img src={BGFS} alt="BGIMG" className={style.img} />
      <div className={style.BGColor} />
      {SEND_OR_NOT_DATA.map((data,idx) => (
         regexFS === 1 ? <div className={style.sendedOrNot} key={idx}> <img src={EXIT} alt="EXIT" className={style.EXIT}  onClick={() => dispatching("regexForSupport",null)}/> {data.data1}</div> : regexFS === 2 ? <div className={style.sendedOrNot} key={idx + 1}> <img src={EXIT} alt="EXIT" className={style.EXIT} onClick={() => dispatching("regexForSupport",null)}/>{data.data2}</div> : ''
      ))}
     <form method="post" onSubmit={handleSubmit}>
          <div>
         
            <label htmlFor="name">
              Full name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) => dispatching("nameForSupport",e.target.value)}
              value={nameFS}
              placeholder="At least 3 letters"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) => dispatching("emailForSupport",e.target.value)}
              value={emailFS}
              placeholder='At least 3 letters with the end "gmail.com"'
            />
          </div>
          <div>
           
            <label htmlFor="textArea">Message</label>
            <textarea
              name="textArea"
              id="textArea"
              onChange={(e) => dispatching("textForSupport",e.target.value)}
              value={textFS}
              placeholder="  At least 7 letters"
            ></textarea>
          </div>
          <button
           
            onClick={() => {
              regexCheck();
            }}
          >
            Submit
          </button>
      </form>
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
  