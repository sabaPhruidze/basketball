import {useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from './Root';
import style from './register.module.css'

interface User { 
  name: string;
  lastname: string;
  nickname: string;
  birthday: string; 
  email: string;
  password: string;
}

export default function Register() {
  const context = useContext(myContext);
  const {languageChanger,state,dispatching} = context;
  const {register,submit} = state;
  const navigate = useNavigate();
  
  const DATA = [
    {
      key:0,
      id:'name',
      labelContext:languageChanger('სახელი',"名前",'Name'),
      type:'text',
      value:register.name || '',
      onChange:(e:any) => {dispatching('registerName',e.target.value)}
    },
    {
      key:1,
      id:'lastname',
      labelContext:languageChanger('გვარი',"苗字",'lastname'),
      type:'text',
      value:register.lastname || '',
      onChange:(e:any) => dispatching('registerLastname',e.target.value),
    },
    {
      key:2,
      id:'nickname',
      labelContext:languageChanger('მეტსახელი',"異名",'nickname'),
      type:'text',
      value:register.nickname || '',
      onChange:(e:any) => dispatching('registerNickname',e.target.value),
    },
    {
      key:3,
      id:'email',
      labelContext:languageChanger('ელ-ფოსტა',"メール",'Email'),
      type:'email',
      value:register.email || '',
      onChange:(e:any) => dispatching('registerEmail',e.target.value),
    },
    {
      key:4,
      id:'birthday',
      labelContext:languageChanger('დაბადების თარიღი',"誕生日",'Birthday'),
      type:'date',
      value:register.birthday || '',
      onChange:(e:any) => dispatching('registerBirthday',e.target.value),
    },
    {
      key:5,
      id:'password',
      labelContext:languageChanger('პაროლი',"パスワード",'Password'),
      type:'password',
      value:register.password || '',
      onChange:(e:any) => dispatching('registerPassword',e.target.value),
    },
  ];
 
// for validation
let name =register.name && register.name.length > 3 ;
let lastname = register.lastname.length >=3;
let nickname = register.nickname.length >=3;

let isGmail = register.email.endsWith('@gmail.com');
let email = register.email.length > 10 && isGmail;
let birthday = register.birthday.length > 0;

let hasLetterAndNumber = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/.test(register.password);
let password = register.password.length > 5 && hasLetterAndNumber;

useEffect(() => {
  if(submit && name && lastname && nickname && email && birthday && password) {
      dispatching('postSuccess');
      
      // Retrieve existing users
      const existingUsers = JSON.parse(localStorage.getItem('user') || "[]");
      
      // Add new user to existing users
      existingUsers.push(register);
      
      // Save all users back to local storage
      localStorage.setItem('user', JSON.stringify(existingUsers));
      
      dispatching('submit',false);
      dispatchingFree();
      navigate('/login');
    } else {
      dispatching('postFailure');  
    }
},[submit]);
// for validation


const dispatchingFree = () => {
  dispatching('registerName','');
      dispatching('registerLastname','');
      dispatching('registerNickname','');
      dispatching('registerEmail','');
      dispatching('registerBirthday','');
      dispatching('registerPassword','');
}
return (
  <>
  <div className={style.background}></div>
  <div className={style.wrapper}>
   {DATA.map((data) => (
  <div key={data.key} className={style.container}>
    <label htmlFor={data.id}>{data.labelContext}</label>
    <input type={data.type} name={data.id} id={data.id} value={data.value} onChange={data.onChange}/>
  </div>
   ))}
   <button className={style.btnR} onClick={() => dispatching('submit',!submit)}>{languageChanger("გაგზავნა","送信する","Submit")}</button>
  </div>
  </>
);
}