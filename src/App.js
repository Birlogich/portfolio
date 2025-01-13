import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main/Main";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Stack } from "./components/Stack/Stack";
import { ProjectsPage } from "./components/ProjectsPage/ProjectsPage";
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="stack" element={<Stack />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
