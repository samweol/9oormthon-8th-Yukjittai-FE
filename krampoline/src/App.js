import { Route, BrowserRouter, Routes } from "react-router-dom";

import Main from "./Main";
import Test from "./pages/Test";
import Test2 from "./pages/Test2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/test" element={<Test />} />
        <Route path="/test2" element={<Test2 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
