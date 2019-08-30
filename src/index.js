import React, { useState } from "react";
import ReactDOM from "react-dom";
import MutatorSection from "./MutatorSection";
import ColorSlider from "./ColorSlider";
import ColorPicker from "./ColorPicker";
import Header from "./Theme/Widgets/Header";
import Welcome from "./Theme/Widgets/Welcome";
import About from "./Theme/Widgets/About";
import Page from "./Theme/Widgets/Page";
import "./styles.css";

function App() {
  const [primary, setPrimary] = useState("#92211d");
  const [scheme, setScheme] = useState("light");
  const [imgColors, setImgColors] = useState([]);
  const [heroColors, setHeroColors] = useState([]);

  return (
    <div className="App">
      <main className="preview-container">
        <div className="preview">
          <Page color={primary} scheme={scheme}>
            <Header setHeroColors={setHeroColors} setImgColors={setImgColors} />
            <Welcome index={0} />
            <About index={1} />
          </Page>
        </div>
      </main>
      <aside>
        <MutatorSection>
          <p className="section-label">Color Palette</p>
          <div className="color-input-wrapper">
            <ColorPicker
              heroColors={heroColors}
              imgColors={imgColors}
              color={primary}
              setColor={setPrimary}
            />
          </div>
        </MutatorSection>
        <MutatorSection>
          <p className="section-label">Color Application</p>
          <ColorSlider color={primary} scheme={scheme} setScheme={setScheme} />
        </MutatorSection>
      </aside>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
