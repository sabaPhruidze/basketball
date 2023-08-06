import {useContext,useLayoutEffect} from 'react';
import { myContext } from './Root';
import style from './register.module.css'
export default function Register() {
  const context = useContext(myContext);
  const {languageChanger,state,dispatching} = context;
  const {register,postLS,submit} = state;
  

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
  ]
// for validation
let name = '';
useLayoutEffect(() => {
   name =register.name && register.name.length > 3 ;
  if(name) {
      dispatching('postSuccess');
      console.log(postLS)
    }else {
      dispatching('postFailure');
      console.log(postLS)
    }
},[submit])
const lastname = register.lastname.length >=3;
const nickname = register.nickname.length >=3;

const isGmail = register.email.endsWith('@gmail.com');
const email = register.email.length > 10 && isGmail;



const minDate = new Date('1950-01-01'); 
const maxDate = new Date('2020-12-31');
const birthday = register.birthday.length > 0 && register.birthday >= minDate && register.birthday <= maxDate;

const hasNumber = /\d/.test(register.password);
const password = register.password > 5 && hasNumber;
// for validation

  const FormCheck = () => {
    
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