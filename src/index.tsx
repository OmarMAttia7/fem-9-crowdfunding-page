import ReactDOMClient from "react-dom/client";
import React, { Suspense } from "react";
import Loading from "./Components/Loading";
import "./index.css";

const root = ReactDOMClient.createRoot(document.getElementById("root"));

const App = React.lazy(() => import("./App"));

root.render(<Suspense fallback={<Loading p="p-10" />}><App /></Suspense>)