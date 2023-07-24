import React, { useReducer, createContext, useEffect, useState } from "react";
import Header from "./support/Header";
import Footer from "./support/Footer";
import History from "./History";
import style from "./style.module.css";
import { Outlet } from "react-router-dom";

export const myContext = createContext<any>("");

const initialState = {
  navBarToggle: false,
  languageToggle: 0,
};

type ActionType = {
  type: string;
  payload?: any;
};

const reducer = (state: typeof initialState, action: ActionType) => {
  const newState = { ...state };
  switch (action.type) {
    case "showNavBar":
    case "hideNavBar":
      newState.navBarToggle = action.payload;
      break;
    case "georgian":
    case "japanese":
    case "UK":
      newState.languageToggle = action.payload;
      break;
    default:
      throw new Error("Unknown action type");
  }

  return newState; // Return the updated state
};

export default function Root() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
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
  function languageChanger(georgian: string, japanese: string, UK: string) {
    switch (state.languageToggle) {
      case 0:
        return georgian;
        break;
      case 1:
        return japanese;
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
        screenHeight,
        screenWidth,
        languageChanger,
      }}
    >
      <div className={style.container}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </myContext.Provider>
  );
}
