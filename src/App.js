import "./App.css";
import Header from "./Components/Header";
import Head from "./Components/Head.js";
import Body from "./Components/Body.js";
import Footer from "./Components/Footer";
import Skill from "./Components/Skill";
import "./Components/style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Head />
      <Skill />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
