import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Main2 from "./sub2/src/pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sub" element={<Main2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
