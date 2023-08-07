import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import History from "./components/History";
import HistoryInfo from "./components/HistoryInfo";
import Basic from "./components/Basic";
import Intermedate from "./components/Intermedate";
import Practic from "./components/Practic";
import Questions from "./components/Questions";
import Support from "./components/Support";
import Login from "./components/Login";
import Register from "./components/Register";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:questionId" element={<HistoryInfo />} />
        <Route path="/practic">
          <Route index={true} element={<Practic />} />
          <Route path="basic" element={<Basic />} />
          <Route path="intermedate" element={<Intermedate />} />
        </Route>
        <Route path="/questions" element={<Questions />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
