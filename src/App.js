import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { GlobalStyle } from "./Global_Styles/Global_Style";
import { ThemeProvider } from "styled-components";
import { theme } from "./Global_Styles/Theme";
import Dashboard from "./pages/Dashboard";
import JoinUserModel from "./components/JoinUser_Model";
import AllUsers from "./pages/AllUsers";
import { getAllEmployes } from "./redux/slices/Employe_Slice";
import { useDispatch} from "react-redux";
import ConfirmModel from "./components/Confirm_Model";
import Dummy from "./components/Dummy"
const App = () => {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllEmployes())
  },[dispatch])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle/>
        <ToastContainer/>
        <Routes>
          {/* <Route path="/" element={<Dummy/>} /> */}
          <Route path="/" element={<AllUsers/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/update/:id" element={<JoinUserModel/>} />
          <Route path="/:id" element={<ConfirmModel/>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
