import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AssetCreate from "./view/pages/AssetCreate";
import AssetDetail from "./view/pages/AssetDetail";
import AssetList from "./view/pages/AssetList";
import AssetUpdate from "./view/pages/AssetUpdate";
import Page from "./view/templates/Page";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <Routes>
          <Route exact path="/" element={<AssetList />} />
          <Route exact path="/create" element={<AssetCreate />} />
          <Route exact path="/detail/:internalId" element={<AssetDetail />} />
          <Route exact path="/update/:internalId" element={<AssetUpdate />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
