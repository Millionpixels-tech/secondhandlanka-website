import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from "./App";
import "./styles.css";

const root = document.getElementById("root")!;
const path = window.location.pathname.replace(/\/$/, "") || "/";
const app = <React.StrictMode><App path={path} /></React.StrictMode>;
if (root.hasChildNodes() && root.dataset.path === path) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
