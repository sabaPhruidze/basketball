import { useReducer, createContext, useEffect, useState } from "react";
import Header from "./support/Header";
import Footer from "./support/Footer";
import style from "./home.module.css";
import { Outlet } from "react-router-dom";

export const myContext = createContext<any>("");
// for Register & login

interface User { 
  name: string;
  lastname: string;
  nickname: string;
  birthday: string; 
  email: string;
  password: string;
}

// for Register & login

// all state must have last letter written big
interface InitialState {
  navCollapsE: boolean;
  languagE: number;
  arrowClicK: null|number;
  sendFS:boolean; //sendForSupport
  IbuttoN:boolean;// button in intermedate for searching
  register:User; // this two are very much used and I am not going to change it
  login:User; // this two are very much used and I am not going to change it
  postLS:string; //register warning                  
  submitR:boolean; //submit for register
  submitL:boolean;// submit for login
  loginLS:string;
}
const initialState : InitialState  = {
  navCollapsE: false,
  languagE: 0,
  arrowClicK:null,
  sendFS:false,
  IbuttoN:false,
  register:{
    name: '',
    lastname: '',
    nickname:'',
    birthday:'',
    email: '',
    password:'',
  },
  login: {
  name: '',
  lastname: '',
  nickname: '',
  birthday: '', 
  email: '',
  password: '',
  },
  postLS:'',
  submitR:false,
  submitL:false,
  loginLS:'',
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "navShow":
    case "navHide":
      newState.navCollapsE = action.payload;
      break;
    case "GEO":
    case "JPN":
    case "UK":
      newState.languagE = action.payload;
      break;
    case "arrow":
      newState.arrowClicK = action.payload;
      break;
    case "sendForSupport":
      newState.sendFS = action.payload;
      break
    case "intermedatebutton":
      newState.IbuttoN =action.payload;
      break
    case "registerName":
      newState.register.name =action.payload;
      break
    case "registerLastname":
      newState.register.lastname =action.payload;
      break
    case "registerNickname":
      newState.register.nickname =action.payload;
      break
    case "registerEmail":
      newState.register.email =action.payload;
      break
    case "registerBirthday":
      newState.register.birthday =action.payload;
      break
    case "registerPassword":
      newState.register.password =action.payload;
      break;
    case "postSuccess":
    case "postFailure":
    case "postZero":
      newState.postLS =action.type;
      break;
    case 'submit':
      newState.submitR= action.payload;
      break
    case "loginName":
      newState.login.name =action.payload;
      break
    case "loginLastname":
      newState.login.lastname =action.payload;
      break
    case "loginNickname":
      newState.login.nickname =action.payload;
      break
    case "loginEmail":
      newState.login.email =action.payload;
      break
    case "loginBirthday":
      newState.login.birthday =action.payload;
      break
    case "loginPassword":
        newState.login.password =action.payload;
        break;
    case "submitL":
      newState.submitL =action.payload;
      break;
    case "LOGIN":
    case "CANNOTLOGIN":
    case "BEFORETRYINGLOGIN":
      newState.loginLS = action.type;
      break;
    
        default:
      throw new Error("Unknown action type");
  }

  return newState; 
};

export default function Root() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth); // for understanding what is the width 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  function dispatching(type: string, payload: boolean) {
    dispatch({
      type: type,
      payload: payload,
    });
  }
  function languageChanger(GEO: string, JPN: string, UK: string) {
    switch (state.languagE) {
      case 0:
        return GEO;
        break;
      case 1:
        return JPN;
        break;
      case 2:
        return UK;
        break;
      default:
        throw new Error("Unknown action type");
    }
  }
  return (
    <myContext.Provider
      value={{
        state,
        dispatching,
        screenWidth,
        languageChanger,
      }}
    >
      <div className={style.DFlexColumn100}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </myContext.Provider>
  );
}
