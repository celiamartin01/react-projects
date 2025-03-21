import { Routes, Route } from "react-router-dom"
import TodayTasksPage from "./pages/TodayTasksPage"
import AllTasksPage from "./pages/AllTasksPage"
import ProjectExamplePage from "./pages/ProjectExamplePage"

function App() {

  return (
    <Routes>
      <Route path="/" element={<TodayTasksPage />} />
      <Route path="/all" element={<AllTasksPage />} />
      <Route path="/projectEx" element={<ProjectExamplePage />} />
    </Routes>
  )
}

export default App
