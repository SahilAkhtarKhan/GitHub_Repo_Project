import React from "react";
import MainPage from "./5C_network/MainPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Followers from "./5C_network/Followers";
import SingleRepo from "./5C_network/singleRepo/singleRepo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/?q" element={<MainPage />} />
          <Route path="/repo/:userId/:repoId" element={<SingleRepo />} />
          <Route path="/followers/:userName" element={<Followers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
