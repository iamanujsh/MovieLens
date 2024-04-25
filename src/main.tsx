import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SearchProvider } from "./contexts/searchResult.context.tsx";
import { GenresProvider } from "./contexts/genres.context.tsx";
import { AdultProvider } from "./contexts/adult.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <GenresProvider>
          <AdultProvider>
            <App />
          </AdultProvider>
        </GenresProvider>
      </SearchProvider>
    </BrowserRouter>
  {/* </React.StrictMode> */}
);
