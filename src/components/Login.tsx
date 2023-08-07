import { useContext } from "react";
import { myContext } from "./Root";
import style from './login.module.css';
import EXIT from '../assets/icon/EXIT.svg'
export default function Login() {
  const context = useContext(myContext);
  const {state, languageChanger,dispatching} = context
  const {postLS} = state;
  return (
    <>
    {postLS === 'postSuccess' ? (
        <div className={style.containerForSupport}>
          <div className={style.supportSuccess}>
            <img src={EXIT} alt="exit" className={style.exitI} onClick={() => dispatching("postFailure")}/>
            <p>{languageChanger("გილოცავთ! წარმატებით დარეგისტრირდით","おめでとう！ 正常に登録されました","congratulations! You have successfully registered")}</p>
          </div>
      </div>
      ) : null}
    <div>Login</div>
    </>
  
  );
}
