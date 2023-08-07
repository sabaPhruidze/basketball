import { useReducer, createContext, useEffect, useState } from "react";
import Header from "./support/Header";
import Footer from "./support/Footer";
import style from "./home.module.css";
import { Outlet } from "react-router-dom";
import EXIT from "../assets/icon/EXIT.svg"; // I am not going to use it here but I am using in many other components So I will try to make it less written
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
    case "N_SHOW":
    case "N_HIDE":
      newState.navCollapsE = action.payload;
      break;
    case "GEO":
    case "JPN":
    case "UK":
      newState.languagE = action.payload;
      break;
    case "ARROW":
      newState.arrowClicK = action.payload;
      break;
    case "SEND_FOR_SUPPORT":
      newState.sendFS = action.payload;
      break
    case 'INTERMEDATE_BTN':
      newState.IbuttoN =action.payload;
      break
    case "REGISTER_NAME":
      newState.register.name =action.payload;
      break
    case "REGISTER_LASTNAME":
      newState.register.lastname =action.payload;
      break
    case "REGISTER_NICKNAME":
      newState.register.nickname =action.payload;
      break
    case "REGISTER_EMAIL":
      newState.register.email =action.payload;
      break
    case "REGISTER_BIRTHDAY":
      newState.register.birthday =action.payload;
      break
    case "REGISTER_PASSWORD":
      newState.register.password =action.payload;
      break;
    case "POST_SUCCESS":
    case "POST_FAILURE":
    case "POST_ZERO":
      newState.postLS =action.type;
      break;
    case "SUBMIT_R":
      newState.submitR= action.payload;
      break
    case "LOGIN_NAME":
      newState.login.name =action.payload;
      break
    case "LOGIN_LASTNAME":
      newState.login.lastname =action.payload;
      break
    case "LOGIN_NICKNAME":
      newState.login.nickname =action.payload;
      break
    case "LOGIN_EMAIL":
      newState.login.email =action.payload;
      break
    case "LOGIN_BIRTHDAY":
      newState.login.birthday =action.payload;
      break
    case "LOGIN_PASSWORD":
        newState.login.password =action.payload;
        break;
    case "SUBMIT_L":
      newState.submitL =action.payload;
      break;
    case "LOGIN":
    case "CAN_NOT_LOGIN":
    case "BEFORE_TRYING_LOGIN":
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
      setScreenWidth(window.innerWidth); // width of brower
    };
    window.addEventListener("resize", handleResize);//before
    return () => {
      window.removeEventListener("resize", handleResize);//after
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
        EXIT
      }}
    >
      <div className={style.root}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </myContext.Provider>
  );
}
