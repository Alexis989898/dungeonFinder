import { useState } from "react";
import Header from "./sections/Header";
import Content from "./sections/Content";
import Footer from "./sections/Footer";
import bg_cover from "./assets/MonsterManualTraditionalCover.webp";

function App() {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="mx-[20%]">
          <div className="rpg-cover-wrapper absolute bg-test"></div>
          <Header />
          <Content />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;