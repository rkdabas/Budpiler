import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { PlaygroundScreen } from "./screens/PlaygroundScreen";
import { PlaygroundProvider } from "./Providers/PlaygroundProvider.jsx";
import { ModalProvider } from "./Providers/ModalProvider.jsx";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const App = () => {
  return (
    <>
      <PlaygroundProvider>
        <ModalProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route
                path="/playground/:fileId/:folderId"
                element={<PlaygroundScreen />}
              />
            </Routes>
          </BrowserRouter>
        </ModalProvider>
      </PlaygroundProvider>
      <Analytics />
      <SpeedInsights />
    </>
  );
};

export default App;
