import "./App.css";
import { useState } from "react";

const Select = ({ lang, setLang }) => {
  return (
    <div className="dropdown" style={{ marginTop: 40 }}>
      <button className="dropbtn">{lang} ▼</button>
      <div className="dropdown-content">
        <a href="#" onClick={() => setLang("English")}>
          English
        </a>
        <a href="#" onClick={() => setLang("German")}>
          German
        </a>
        <a href="#" onClick={() => setLang("Hebrew")}>
          Hebrew
        </a>
      </div>
    </div>
  );
};

function App() {
  const [lang, setLang] = useState("English");

  const date = new Date();
  const month = date.getUTCMonth() + 1; //months from 1-12
  const day = date.getUTCDate();
  console.log(date, month, day);

  const strings = {
    English: `In ${
      27 - 1 - day
    } days (27.1) the International Holocaust Museum in Minecraft will be open for all.`,
    German: `In ${
      27 - 1 - day
    } Tagen (27.1) wird das Internationale Holocaust-Museum in Minecraft für alle geöffnet sein.`,
    Hebrew: `בעוד ${
      27 - 1 - day
    } ימים (27.1) מוזיאון השואה הבינלאומי במיינקראפט יפתח עבור כולם.`,
  };

  return (
    <div className="App">
      <header className="App-header">
        {strings[lang]}
        <Select lang={lang} setLang={setLang} />
      </header>
    </div>
  );
}

export default App;
