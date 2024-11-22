import { createRoot } from "react-dom/client";
import React from "react";

import UserCV from "./UserCV";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<UserCV />);
