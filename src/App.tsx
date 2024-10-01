import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/templates/layout/pageLayout/Layout";
import { StoreLayot } from "./components/templates/layout/storeLayout/StoreLayout";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route path="/stores" element={<StoreLayot />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
