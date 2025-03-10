import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import "./style.css";

export default function App() {
    return (
        <div className="app-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
