import { useState } from "react"
import { cn } from "@/lib/utils"

const skills =[
    
    //Adobe Creative Suite
    {name: "Illustrator", level: 95, category: "adobe"},
    {name: "After Effects", level: 80, category: "adobe"},
    {name: "Photoshop", level: 80, category: "adobe"},

    //Coding Languages, adjust levels
    {name: "C++", level: 95, category: "language"},
    {name: "C#", level: 80, category: "language"},
    {name: "Python", level: 80, category: "language"},
    {name: "HTML/CSS", level: 80, category: "language"},
    {name: "TailwindCSS", level: 80, category: "language"},
    {name: "JavaScript", level: 80, category: "language"},
    {name: "React", level: 80, category: "language"},

    //Tools
    {name: "VSCode", level: 95, category: "tools"},
    {name: "GitHub", level: 95, category: "tools"},
    {name: "Figma", level: 95, category: "tools"},
    {name: "Instagram", level: 95, category: "tools"},
]

const categories = ["all", "adobe", "language", "tools"]


export const Skills = () => {
    
    const [activeCategory, setActiveCategory] = useState("all"); //this should be how to categorize projects in the future, create a use state for active category, categories located in arrays
    
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"> 
                    My <span className="text-primary"> Skills</span>
                </h2>

                {/* likely want to change the styling of the buttons, hover if not active */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key} 
                        onClick={() => setActiveCategory(category)} 
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                        )}>
                            {category}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden"> 
                                <div className="bg-primary h-2 rounded-full origin-left aniamte-[grow_1.5_ease-out]"
                                     style={{width: skill.level + "%"}}/>   
                            </div>
                            <div className="text-right mt-1 ">
                                <span className="text-sm text-muted-foreground ">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}