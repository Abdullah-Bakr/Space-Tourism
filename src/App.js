import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";
import Header from "./Components/Header";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import jsonData from "./data.json";

function App() {
  const location = useLocation().pathname;
  const newClass = location.split("/")[1];
  const [data, setData] = useState(jsonData);

  return (
    <div className={"main " + newClass}>
      <div>
        <Header currentRoute={newClass} />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination data={jsonData} />}
          />
          <Route path="/crew" element={<Crew data={jsonData} />} />
          <Route path="/technology" element={<Technology data={data} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
