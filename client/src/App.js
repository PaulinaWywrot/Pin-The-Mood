import "./App.css";
import Heading from "./Components/Heading";
import Main from "./Components/Main";
import NavbarComponent from "./Components/NavbarComponent";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Heading />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
