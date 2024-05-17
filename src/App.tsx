import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Protected } from "./layout/Protected";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected element={<Home />} />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
