import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Root";
import style from './login.module.css';
import EXIT from '../assets/icon/EXIT.svg'
export default function Login() {
  const context = useContext(myContext);
  const {state, languageChanger,dispatching} = context
  const {login,submitL,loginLS} = state;
  // const {name, lastname,nickname, birthday,email, password} = login;
  interface UserLogin { 
    name: string;
    lastname: string;
    nickname: string;
    birthday: string; 
    email: string;
    password: string;
  }
  const DATA = [
    {
      key:0,
      id:'email',
      labelContext:languageChanger('ელ-ფოსტა',"メール",'Email'),
      type:'email',
      value:login.email || '',
      onChange:(e:any) => dispatching('LOGIN_EMAIL',e.target.value),
    },
    {
      key:1,
      id:'password',
      labelContext:languageChanger('პაროლი',"パスワード",'Password'),
      type:'password',
      value:login.password || '',
      onChange:(e:any) => dispatching('LOGIN_PASSWORD',e.target.value),
    },
  ];
 const navigate = useNavigate();
  useEffect(() => {   
      const users = JSON.parse(localStorage.getItem('user') || "[]") as UserLogin[];
      const user = users.find(u => u.email === login.email && u.password === login.password);
      if (user) {  
        dispatching('LOGIN');
        navigate('/');
        dispatching('LOGIN_EMAIL','');
        dispatching('LOGIN_PASSWORD','');
      } else {
        dispatching('CAN_NOT_LOGIN');
      }  

  }, [submitL]);
  return (
    <>
    <div className={style.background}></div>
    {loginLS === 'CAN_NOT_LOGIN' ? (
     <div className={style.containerForSupport}>
     <div className={style.supportSuccess}>
       <img src={EXIT} alt="exit" className={style.exitI} onClick={() => dispatching('BEFORE_TRYING_LOGIN')}/>
       <p>{languageChanger('ცადეთ ხელახლა','再試行する','Try again')}</p>
     </div>
 </div>
    ) : null}
     <div className={style.whole}>
      {DATA.map((data) => (
      <div key={data.key} className={style.container}>
        <label htmlFor={data.id}>{data.labelContext}</label>
        <input type={data.type} name={data.id} id={data.id} value={data.value} onChange={data.onChange}/>
      </div>
      ))}
      <button className={style.btnR} onClick={() => dispatching("SUBMIT_L",!submitL)}>{languageChanger("შესვლა","ログイン","Log in")}</button>
    </div> 
    </>
  );
}



