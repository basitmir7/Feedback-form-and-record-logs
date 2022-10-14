import "./App.css";
import { useState } from "react";
import Feedback from "./components/Feedback";
import Form from "./components/Form";
import Message from "./components/Message";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/message" element={<Message />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
