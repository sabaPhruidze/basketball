import {useContext,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { myContext } from './Root';
import style from './register.module.css'
import BGFORREGISTERICON from '../assets/img/BGFORREGISTER.jpg'
export default function Register() {
  const context = useContext(myContext);
  const {languageChanger,state,dispatching,EXIT} = context;
  const {register,submitR,postLS} = state;
  const navigate = useNavigate();
  
  const DATA = [
    {
      key:0,
      id:'name',
      labelContext:languageChanger('სახელი',"名前",'Name'),
      type:'text',
      value:register.name || '',
      onChange:(e:any) => {dispatching('REGISTER_NAME',e.target.value)}
    },
    {
      key:1,
      id:'lastname',
      labelContext:languageChanger('გვარი',"苗字",'lastname'),
      type:'text',
      value:register.lastname || '',
      onChange:(e:any) => dispatching('REGISTER_LASTNAME',e.target.value),
    },
    {
      key:2,
      id:'nickname',
      labelContext:languageChanger('მეტსახელი',"異名",'nickname'),
      type:'text',
      value:register.nickname || '',
      onChange:(e:any) => dispatching('REGISTER_NICKNAME',e.target.value),
    },
    {
      key:3,
      id:'email',
      labelContext:languageChanger('ელ-ფოსტა',"メール",'Email'),
      type:'email',
      value:register.email || '',
      onChange:(e:any) => dispatching('REGISTER_EMAIL',e.target.value),
    },
    {
      key:4,
      id:'birthday',
      labelContext:languageChanger('დაბადების თარიღი',"誕生日",'Birthday'),
      type:'date',
      value:register.birthday || '',
      onChange:(e:any) => dispatching('REGISTER_BIRTHDAY',e.target.value),
    },
    {
      key:5,
      id:'password',
      labelContext:languageChanger('პაროლი',"パスワード",'Password'),
      type:'password',
      value:register.password || '',
      onChange:(e:any) => dispatching('REGISTER_PASSWORD',e.target.value),
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
  if(submitR && name && lastname && nickname && email && birthday && password) {
      dispatching('POST_SUCCESS');
      
      // Retrieve existing users
      const existingUsers = JSON.parse(localStorage.getItem('user') || "[]");
      
      // Add new user to existing users
      existingUsers.push(register);
      
      // Save all users back to local storage
      localStorage.setItem('user', JSON.stringify(existingUsers));
      
      dispatching("SUBMIT_R",false);
      dispatchingFree();
      navigate('/login');
    } else {
      dispatching('POST_FAILURE');  
    }
},[submitR]);
// for validation


const dispatchingFree = () => {
  dispatching('REGISTER_NAME','');
      dispatching('REGISTER_LASTNAME','');
      dispatching('REGISTER_NICKNAME','');
      dispatching('REGISTER_EMAIL','');
      dispatching('REGISTER_BIRTHDAY','');
      dispatching('REGISTER_PASSWORD','');
}
return (
  <>
  <div className={style.background}></div>
  <div className={style.wrapper}>
  {postLS === 'POST_FAILURE' ? (
        <div className={style.containerForSupport}>
          <div className={style.supportSuccess}>
            <img src={BGFORREGISTERICON} alt="BGFORREGISTERICON" className={style.BGFORREGISTERICON}/>
            <img src={EXIT} alt="exit" className={style.exitI} onClick={() => dispatching("POST_ZERO")}/>
            <p>{languageChanger(<>
              დარწმუნდით, რომ შესრულებულია შემდეგი პირობები გამონაკლისის გარეშე:

სახელი, გვარი და მეტსახელი უნდა იყოს მინიმუმ სამი სიმბოლო.

ელფოსტის მისამართი უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს @gmail.com დომენამდე და უნდა გამოიყენოს @gmail.com გაფართოება.

დაბადების თარიღი მითითებული უნდა იყოს სწორი ფორმატით.

პაროლი უნდა შეიცავდეს მინიმუმ ხუთ სიმბოლოს, მათ შორის მინიმუმ ერთი ასო და ერთი ნომერი.
            </>,<>
            
            次の条件が例外なく満たされていることを確認してください。

名、姓、ニックネームは 3 文字以上である必要があります。

電子メール アドレスには、@gmail.com ドメインの前に少なくとも 10 文字を含める必要があり、@gmail.com 拡張子を使用する必要があります。

生年月日は有効な形式で指定する必要があります。

パスワードには、少なくとも 1 つの文字と 1 つの数字を含む 5 文字以上を含める必要があります。
            </>,<>Please ensure the following conditions are met without exception:

First name, last name and nickname must be a minimum of three characters.

Email address must contain at minimum 10 characters before the @gmail.com domain and must use the @gmail.com extension.

Date of birth must be provided in a valid format.

Password must contain a minimum of five characters, including at least one letter and one number.</>)}</p>
          </div>
      </div>
      ) : null}
   {DATA.map((data) => (
    <div key={data.key} className={style.container}>
      <label htmlFor={data.id}>{data.labelContext}</label>
      <input type={data.type} name={data.id} id={data.id} value={data.value} onChange={data.onChange}/>
    </div>
    ))}
    <button className={style.btnR} onClick={() => dispatching("SUBMIT_R",!submitR)}>{languageChanger("გაგზავნა","送信する","Submit")}</button>
  </div>
  </>
);
}