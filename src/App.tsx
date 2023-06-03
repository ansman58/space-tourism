import style from "./App.module.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className={style.app}>
      <Header />
    </div>
  );
}

export default App;
