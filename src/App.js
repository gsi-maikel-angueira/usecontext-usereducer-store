import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";
import { StoreProvider } from "./context-and-reducer/StoreContext";

function App() {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App;
