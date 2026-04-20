import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

//import { ImageGallery } from "./ImageGallery"
//import { Box } from "./Box"
//import { slides } from "../data/slides.js"
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";



const projects =[
    {
        id: 1,
        title: "Nikes",
        description: "Sticker inspired by Frank Ocean's 'Nikes'",
        image: "projects/nikes.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Blonded",
    },

    {
        id: 2,
        title: "MF LOU",
        description: "Sticker of my cat Louie inspired by legendary rapper MF DOOM",
        image: "projects/mflou.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Lou",
    },

    {
        id: 3,
        title: "Little Lani's Text Logo",
        description: "The text logo for Little Lani's mock brand.",
        image: "projects/lanis.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "Blonded",
    },

    {
        id: 4,
        title: "Motion Tiles",
        description: "Pulsating background.",
        image: "projects/motiontiles.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },

    {
        id: 5,
        title: "Glitchy Shoe",
        description: "Rotating shoe with VHS effects.",
        image: "projects/shoe.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },

    {
        id: 6,
        title: "Zero State Hand",
        description: "Created for neofuturistic mock brand Zero//State.",
        image: "projects/hand.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "zerostate",
    },

    {
        id: 7,
        title: "Flying Birds",
        description: "Photo of some birds flying.",
        image: "projects/birds.JPG",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },

    {
        id: 8,
        title: "Boat On The River",
        description: "Boat travelling along the river.",
        image: "projects/boat.jpeg",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },

    {
        id: 9,
        title: "Pacific Park",
        description: "A couple rides at Pacific Park",
        image: "projects/pacificpark.JPG",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },
    {
        id: 10,
        title: "Astrothunder Hypercoaster",
        description: "Animated graphic for a hypercoaster inspired by Travis Scott's 'Astrothunder'",
        image: "projects/astrothunder.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 11,
        title: "Zero State Cube",
        description: "Loading screen animation for Zero//State",
        image: "projects/cube.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 12,
        title: "Glitch Effect",
        description: "Glitch and reflection effects on text",
        image: "projects/glitch.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 13,
        title: "Nike Glow",
        description: "A transitionary or finishing screen for Nike with glow and particle effects",
        image: "projects/glow.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 14,
        title: "Purple Haze",
        description: "Watch text disappear in a wisp of smoke",
        image: "projects/haze.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 15,
        title: "La Flame",
        description: "Flaming text inspired by Travis Scott moniker 'La Flame'",
        image: "projects/laflame.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 16,
        title: "Melt Away",
        description: "Melting text",
        image: "projects/melt.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 17,
        title: "Neon Flicker",
        description: "A neon flickering sign",
        image: "projects/neonflicker.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 18,
        title: "Zero//State VHS",
        description: "Retro, VHS style effects applied to text",
        image: "projects/vhs.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 19,
        title: "Numbuh Zero",
        description: "Me as a Codename: Kids Next Door character",
        image: "projects/zero.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 20,
        title: "Ragers",
        description: "Hand drawn logo with computer generated text logo.",
        image: "projects/ragers.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 21,
        title: "Little Lani's Branding",
        description: "Branding guidelines for Little Lani's",
        image: "projects/llbranding.png",
        tags: ["Illustrator", "Vector"],
        category: "vector",
        collection: "",
    },
    {
        id: 22,
        title: "Zero//State Gold",
        description: "Rotating gold logo for Zero//State",
        image: "projects/gold.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 23,
        title: "Adidas Logo",
        description: "Metallic render of the Adidas Trefoil logo",
        image: "projects/adidas.mp4",
        tags: ["After Effects", "Motion"],
        category: "motion",
        collection: "",
    },
    {
        id: 24,
        title: "Only You",
        description: "Photo that captures the vibe of Norfolk lounge, Only You",
        image: "projects/onlyyou.png",
        tags: ["Photography"],
        category: "photography",
        collection: "",
    },
    {
        id: 25,
        title: "CRT Effects",
        description: "Futuristic CRT effects on a photo of Travis Scott during the Utopia tour",
        image: "projects/crt.png",
        tags: ["Photoshop"],
        category: "photography",
        collection: "",
    },
    {
        id: 26,
        title: "Threshold Effects",
        description: "Threshold effects applied to a Travis Scott photo",
        image: "projects/threshold.png",
        tags: ["Photoshop"],
        category: "photography",
        collection: "",
    },
]



const categories = ["all", "vector", "motion", "photography", "web development"]
// const collections = ["rodeo", "lanis", "zerostate"]


export const AllProjects = () => {

    const [activeCategory, setActiveCategory] = useState("all"); //this should be how to categorize projects in the future, create a use state for active category, categories located in arrays
    // const [activeCollection, setActiveCollection] = useState("all");
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeId, setActiveId] = useState(null);
    const [open, setOpen] = useState(false);

    const filteredProjects = projects.filter((project) => activeCategory === "all" || project.category === activeCategory);
    // const collections = projects.filter((project) => activeCollection === "all" || project.collection === activeCollection);
    
    const toggleExpand = (id, collection) => {
        setIsExpanded(!isExpanded);
        // If clicking same image, close it; otherwise, open new one
        setActiveId(activeId === id ? null : id);
        // setActiveCollection(activeCollection === collection ? null : collection);
        setOpen(!open);
        
    };
    return (
        <section id="allprojects" className="py-23 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold md-4 text-center"> 
                {" "}
                All <span className="text-primary text-glow"> Projects </span></h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here you can find all of my projects, digital art, and photos. 
                </p>

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
                
                
                {activeCategory && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, key) => 
                                    <div key={key} className="bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                        <div className="h-96 overflow-hidden">
                                            {project.category === "motion" && <video src={project.image} alt={project.title} controls className="w-full h-full object-fit transition-transform duration-500 group-hover:scale-110"/>}
                                            {project.category != "motion" && <img src={project.image} alt={project.title} className="w-full h-full object-cover
                                            transition-transform duration-500 group-hover:scale-110"/>}
                                        </div>

                                        <div className="p-6">
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.tags.map((tag) => (
                                                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                                ))}
                                            </div>

                                            <h3 className="text-xl font-semibold mb-1"> {project.title} </h3>
                                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                        </div>
                                        <div className="flex justify-center mb-2">
                                                {/* for some reason toggleExpand(project.id) doesn't work but setIsExpanded(!isExpanded) does...sometimes?*/}
                                                {/* sometimes toggle works and sometimes set works...not sure why */}
                                                <button onClick={() => setOpen(true)} className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"> 
                                                Expand 
                                                </button>
                                                <Lightbox
                                                    open={open}
                                                    close={() => setOpen(false)}
                                                    slides={[
                                                    { src: "birds.JPG" },
                                                    ]}
                                                />
                                                
                                        </div>
                                        {/* imagegallery works but is still stuck inside div */}
                                        {/* seems to be expanding once then not again */}
                                        
                                    </div>
                                    
                                    
                                        
                        )}
                         
            
                    </div>
                )}
                {/* Content is only rendered if isExpanded is true */}
                
                
            </div>
                
        </section>
    )
}