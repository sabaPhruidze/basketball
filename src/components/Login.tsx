import { useContext } from "react";
import { myContext } from "./Root";
import style from './login.module.css';
import EXIT from '../assets/icon/EXIT.svg'
export default function Login() {
  const context = useContext(myContext);
  const {state, languageChanger,dispatching} = context
  const {postLS,login,loginSubmit} = state;
  // const {name, lastname,nickname, birthday,email, password} = login;
  
  const DATA = [
    {
      key:0,
      id:'email',
      labelContext:languageChanger('ელ-ფოსტა',"メール",'Email'),
      type:'email',
      value:login.email || '',
      onChange:(e:any) => dispatching('loginEmail',e.target.value),
    },
    {
      key:1,
      id:'password',
      labelContext:languageChanger('პაროლი',"パスワード",'Password'),
      type:'password',
      value:login.password || '',
      onChange:(e:any) => dispatching('loginPassword',e.target.value),
    },
  ];
  return (
    <>
    <div className={style.background}></div>
    {postLS === 'postSuccess' ? (
      <div className={style.containerForSupport}>
          <div className={style.supportSuccess}>
            <img src={EXIT} alt="exit" className={style.exitI} onClick={() => dispatching("postFailure")}/>
            <p>{languageChanger("გილოცავთ! წარმატებით დარეგისტრირდით","おめでとう！ 正常に登録されました","congratulations! You have successfully registered")}</p>
          </div>
      </div>
      ) : null}
    {postLS === "postZero" ?
     <div className={style.whole}>
      {DATA.map((data) => (
      <div key={data.key} className={style.container}>
        <label htmlFor={data.id}>{data.labelContext}</label>
        <input type={data.type} name={data.id} id={data.id} value={data.value} onChange={data.onChange}/>
      </div>
      ))}
      <button className={style.btnR} onClick={() => dispatching('submit',!loginSubmit)}>{languageChanger("შესვლა","ログイン","Log in")}</button>
    </div> : null}
    </>
  );
}



