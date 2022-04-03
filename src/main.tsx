import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import Menu from "./routes/Menu";
import About from "./routes/Pages/About";
import Contact from "./routes/Pages/Contact";
import Project from "./routes/Pages/Project";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Menu />}/>
          <Route path="projects" element={<Project />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
