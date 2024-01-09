import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={10}
      messages={[
        "okey",
        "good",
        "amazing",
        "okey",
        "good",
        "amazing",
        "okey",
        "good",
        "amazing",
        "excellent",
      ]}
    />
    <StarRating size={24} color="red" className="test" /> */}
  </React.StrictMode>
);
