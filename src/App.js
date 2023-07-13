import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
