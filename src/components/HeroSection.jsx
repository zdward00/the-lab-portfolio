import { ArrowDown, ChevronDown } from "lucide-react"


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> Zachary</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ward</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I'm a multidisciplinary artist focusing on design in technology. I enjoy 
                    web development, clothing design, photography, and motion and vector graphics. 
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>

            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-md text-muted-foreground mb-2"> Scroll </span>
        <ChevronDown className="h-5 w-5 text-primary" />

        </div>
    </section>
}