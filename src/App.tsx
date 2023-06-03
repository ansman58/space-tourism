import style from "./App.module.scss";
import Header from "./components/Header";
import Home from "./pages/home";

function App() {
  return (
    <div className={style.app}>
      <Header />
      <div className={style.sections}>
        <Home />
      </div>
    </div>
  );
}

export default App;
