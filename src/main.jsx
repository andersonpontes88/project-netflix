import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./Styles/GlobalStyles.js";
/* cSpell:disable */

import { register } from "swiper/element";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <GlobalStyle />
  </StrictMode>
);
