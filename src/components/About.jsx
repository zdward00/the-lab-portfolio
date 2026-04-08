import { User, Briefcase, Code, Headphones, Computer } from "lucide-react"

export const About = () => {
    return (
    <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Curious About Everything</h3> 

                    <p className="text-muted-foreground"> 
                        I built this website using ReactJS and TailwindCSS. I plan to continue to continue
                        to use it to further develop my UI/UX development skills while also showcasing 
                        other projects.
                    </p>

                    <p className="text-muted-foreground"> 
                        From web development to graphic design to sports, I have a number of hobbies. I believe
                        this website will highlight the ways I've found that they build on one another.  
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> 
                            Get In Touch
                        </a>
                        {/* CV needs to be added */}
                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                            Download CV 
                        </a>
                    </div>
                </div>
                {/* Why is there no background card? Fixed in gradient border in index.css */}
                {/* Placeholder texts need to be update */}
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/ > { /* need to change Code/User/Briefcase icons to others - lucide-react */}
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Coding</h4>
                                <p className="text-muted-foreground">
                                    I've studied multiple languages in a univeristy setting 
                                    includng C++, C#, Python, HTML, JavaScript, and CSS.  
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Computer className="h-6 w-6 text-primary"/ >
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Graphic Design</h4>
                                <p className="text-muted-foreground">
                                    I use Adobe Creative Suite to create digital artwork for
                                    mock brands to be used to generate 
                                    merchandise such as clothing and stickers. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Headphones className="h-6 w-6 text-primary"/ >
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Music Production</h4>
                                <p className="text-muted-foreground">
                                    I use Ableton Live to produce music soundtracks
                                    for games and vizualizers. As a bass player, I 
                                    also enjoy recording a play session.  
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}