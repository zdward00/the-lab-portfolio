import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { About } from "../components/About"
import { Skills } from "../components/Skills"
import { ProjectSection } from "../components/ProjectSection"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"
import { WhatsNext } from "../components/WhatsNext"
import { AllProjects } from "../components/AllProjects"

export const Home = () => {

    return(

     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">


        {/* Theme Toggle */}
        {/* <ThemeToggle />  */}

        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <About />
            <ProjectSection />
            <Skills />
            <WhatsNext />
            <Contact />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    )
}