import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
//import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Workspace from "./components/Workspace/Workspace"

function App() {
    return (
        <div>
            <Header />
            <Workspace/>
            <Menu />
        </div>
    );
}

export default App;
