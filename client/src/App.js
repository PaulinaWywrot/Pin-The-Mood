import "./App.css";
import Heading from "./Components/Heading";
import Main from "./Components/Main";
import NavbarComponent from "./Components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Heading />
      <Main />
    </div>
  );
}

export default App;
