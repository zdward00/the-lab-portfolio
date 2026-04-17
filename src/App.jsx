import { Home } from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import { ThemeToggle } from "./components/ThemeToggle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"
import { Projects } from "./pages/Projects"
import { AllProjects } from "./components/AllProjects"




function App() {
 

  return (
    <>
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App