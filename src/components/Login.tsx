import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Root";
import style from './login.module.css';

export default function Login() {
  const context = useContext(myContext);
  const {state, languageChanger,dispatching,EXIT} = context
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
      id:'nickname',
      labelContext:languageChanger('მეტსახელი',"異名",'nickname'),
      type:'text',
      value:login.nickname || '',
      onChange:(e:any) => dispatching('LOGIN_NICKNAME',e.target.value),
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
    if(submitL) {
      const users = JSON.parse(localStorage.getItem('user') || "[]") as UserLogin[];
      const user = users.find(u => u.nickname === login.nickname && u.password === login.password);
      if (user) {  
        dispatching('LOGIN');
        navigate('/');
        dispatching('LOGIN_EMAIL','');
        dispatching('LOGIN_PASSWORD','');
      } else {
        dispatching('CAN_NOT_LOGIN');
      }  
    }
    dispatching("SUBMIT_L",false);
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
      <button className={style.btnR} onClick={() => dispatching("SUBMIT_L",true)}>{languageChanger("შესვლა","ログイン","Log in")}</button>
    </div> 
    </>
  );
}



