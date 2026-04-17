import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { ProjectSection } from "../components/ProjectSection"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
//import { Music } from "../components/Music"
import { AllProjects } from "../components/AllProjects"

export const Projects = () => {

    return(

     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <AllProjects />
        </main>

        {/* Footer */}
        <Footer />
        
    </div>
    )
}