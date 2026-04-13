import { Home } from "./pages/Home"
import {NotFound} from "./pages/NotFound"
import { ThemeToggle } from "./components/ThemeToggle"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster } from "./components/ui/toaster"




function App() {
 

  return (
    <>
    <ThemeToggle />
    <Toaster />
      <BrowserRouter>
        <Routes>
          <Route index element ={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
