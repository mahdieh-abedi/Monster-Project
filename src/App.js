import "./App.css";
import { MonsterList, MonsterPage,Home,Menu} from "./Components";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />}>
          <Route index element={<Home/>} />
          <Route path="monsters" element={<MonsterList />}>
            <Route path=":monsterID" element={<MonsterPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
