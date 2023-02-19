import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Main from "./Component/Main";
import ManyDays from "./Component/ManyDays";
import MyChart from "./Component/MyChart";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <ManyDays />
      <MyChart />
      <Routes>{/* <Route path="/" element={<Main />} /> */}</Routes>
    </BrowserRouter>
  );
}

export default App;
