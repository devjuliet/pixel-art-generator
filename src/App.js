import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ToolsBoard from "./components/ToolsBoard/ToolsBoard";
import Menu from "./components/Menu/Menu";
import Canvas from "./components/Canvas/Canvas";

function App() {
    return (
        <div>
            <Header />
            <Footer />
            <ToolsBoard />
            <Canvas/>
            <Menu />
        </div>
    );
}

export default App;
