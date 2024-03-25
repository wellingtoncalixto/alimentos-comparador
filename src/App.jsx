import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Comparison from "./pages/comparison/Comparison";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/comparison" element={<Comparison />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
