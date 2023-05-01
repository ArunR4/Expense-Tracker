import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import AddExpense from "./Pages/add-expense/AddExpense";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/add-expense" element={<AddExpense/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;