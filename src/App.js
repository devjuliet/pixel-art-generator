import React from "react";
import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import ToolsBoard from "./components/tools-board/tools-board.component";
import Menu from "./components/menu/menu.component";

function App() {
  return (
    <div>
      <Header />
      <Footer />
      <ToolsBoard />
      <Menu />
    </div>
  );
}

export default App;
