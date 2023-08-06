import { useReducer, createContext, useEffect, useState } from "react";
import Header from "./support/Header";
import Footer from "./support/Footer";
import style from "./home.module.css";
import { Outlet } from "react-router-dom";

export const myContext = createContext<any>("");
// for Register
interface User { 
  name: string;
  surname: string;
  nickname: string;
  birthday: string; 
  email: string;
  password: string;
}
// for Register

interface InitialState {
  navCollapse: boolean;
  whichLanguage: number;
  arrowClick: null|number;
  sendFS:boolean;
  intermedateButton:boolean;
  register:User;
  registerLocalStorage:User[];
}
const initialState : InitialState  = {
  navCollapse: false,
  whichLanguage: 0,
  arrowClick:null,
  sendFS:false,
  intermedateButton:false,
  register:{
    name: '',
    surname: '',
    nickname:'',
    birthday:'',
    email: '',
    password:'',
  },
  registerLocalStorage:[],
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
      newState.navCollapse = action.payload;
      break;
    case "GEO":
    case "JPN":
    case "UK":
      newState.whichLanguage = action.payload;
      break;
    case "arrowClick":
      newState.arrowClick = action.payload;
      break;
    case "sendForSupport":
      newState.sendFS = action.payload;
      break
    case "intermedateButton":
      newState.intermedateButton =action.payload;
      break
    case "registerName":
      newState.register.name =action.payload;
      break
    case "registerSurname":
      newState.register.surname =action.payload;
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
      break
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
    switch (state.whichLanguage) {
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
